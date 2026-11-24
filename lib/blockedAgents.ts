/**
 * User agents of AI training crawlers and SEO crawlers.
 * The proxy returns 403 to a request whose User-Agent contains one of these names.
 * public/robots.txt lists the crawlers that obey robots.txt.
 *
 * AI search crawlers and user-triggered fetchers are not on this list. They let
 * AI answers cite and link to the site: OAI-SearchBot, ChatGPT-User,
 * Claude-SearchBot, Claude-User, PerplexityBot and Perplexity-User.
 * The match is a substring match. Do not add a short name such as "Claude",
 * because it also blocks Claude-User.
 */
export const BLOCKED_AGENTS = [
  // Training crawlers
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'Amazonbot',
  'cohere-ai',
  // SEO crawlers
  'SemrushBot',
  'SiteAuditBot',
  'SplitSignalBot',
  'AhrefsBot',
  'AhrefsSiteAudit',
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
  'BLEXBot',
] as const;

const BLOCKED_AGENT_PATTERN = new RegExp(
  BLOCKED_AGENTS.map((agent) =>
    agent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  ).join('|'),
  'i',
);

export function isBlockedAgent(userAgent: string | null | undefined): boolean {
  return !!userAgent && BLOCKED_AGENT_PATTERN.test(userAgent);
}
