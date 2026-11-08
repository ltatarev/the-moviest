/**
 * User agents of AI crawlers, AI user-triggered fetchers and SEO crawlers.
 * The proxy returns 403 to a request whose User-Agent contains one of these names.
 * public/robots.txt lists the crawlers that obey robots.txt.
 */
export const BLOCKED_AGENTS = [
  // User-triggered fetchers
  'ChatGPT-User',
  'Claude-User',
  'Perplexity-User',
  // Training and search crawlers
  'GPTBot',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
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
