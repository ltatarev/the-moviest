import { NextResponse, type NextRequest } from 'next/server';
import {
  getStudioConfig,
  STUDIO_COOKIE,
  verifySession,
} from '@lib/studio/session';

import { isBlockedAgent } from '@lib/blockedAgents';

/**
 * 1. Block AI agents and SEO crawlers on all pages (403).
 * 2. Gate the private `/studio` section behind a session.
 * The matcher skips static build files, so they do not pass through here.
 */

const PUBLIC_PATHS = new Set(['/studio/login', '/api/studio/login']);

function isStudioPath(pathname: string): boolean {
  return (
    pathname === '/studio' ||
    pathname.startsWith('/studio/') ||
    pathname.startsWith('/api/studio/')
  );
}

function withNoIndex(response: NextResponse): NextResponse {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname !== '/robots.txt' &&
    isBlockedAgent(request.headers.get('user-agent'))
  ) {
    return new NextResponse('Forbidden', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  if (!isStudioPath(pathname)) {
    return NextResponse.next();
  }

  const isApi = pathname.startsWith('/api/');
  const config = getStudioConfig();

  if (!config) {
    return withNoIndex(
      new NextResponse(
        'Studio not configured. Set STUDIO_PASSWORD_HASH and STUDIO_SESSION_SECRET.',
        { status: 503, headers: { 'Content-Type': 'text/plain' } },
      ),
    );
  }

  if (PUBLIC_PATHS.has(pathname)) {
    return withNoIndex(NextResponse.next());
  }

  const token = request.cookies.get(STUDIO_COOKIE)?.value;

  if (verifySession(token, config.secret, config.version)) {
    return withNoIndex(NextResponse.next());
  }

  if (isApi) {
    return withNoIndex(
      NextResponse.json({ error: 'Not signed in' }, { status: 401 }),
    );
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = '/studio/login';
  loginUrl.search = '';
  loginUrl.searchParams.set('next', `${pathname}${search}`);

  return withNoIndex(NextResponse.redirect(loginUrl));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon).*)'],
};
