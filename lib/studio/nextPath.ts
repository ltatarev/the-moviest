/* Client-safe: no Node imports. */

/**
 * Where to go after logging in. Only studio paths: anything else (absolute
 * URLs, protocol-relative `//host`, backslash tricks) falls back to `/studio`.
 */
export function safeNextPath(next: unknown): string {
  if (typeof next !== 'string') {
    return '/studio';
  }

  const isStudioPath = next === '/studio' || next.startsWith('/studio/');

  if (
    !isStudioPath ||
    next.includes('\\') ||
    next.includes('//') ||
    next.includes('..') ||
    next.startsWith('/studio/login')
  ) {
    return '/studio';
  }

  return next;
}
