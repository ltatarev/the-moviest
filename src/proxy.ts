import { NextResponse, type NextRequest } from 'next/server';
import {
  getStudioConfig,
  STUDIO_COOKIE,
  verifySession,
} from '@lib/studio/session';

/**
 * Gate for the private `/studio` section. The matcher below is the only place
 * this runs: the public site never passes through here.
 */

const PUBLIC_PATHS = new Set(['/studio/login', '/api/studio/login']);

function withNoIndex(response: NextResponse): NextResponse {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
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
  matcher: ['/studio', '/studio/:path*', '/api/studio/:path*'],
};
