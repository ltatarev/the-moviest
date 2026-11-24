import { describe, expect, it } from 'vitest';
import { isBlockedAgent } from './blockedAgents';

describe('isBlockedAgent', () => {
  it('matches AI training and SEO user agents without case sensitivity', () => {
    expect(
      isBlockedAgent(
        'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
      ),
    ).toBe(true);
    expect(isBlockedAgent('Mozilla/5.0 (compatible; claudebot/1.0)')).toBe(
      true,
    );
    expect(isBlockedAgent('CCBot/2.0 (https://commoncrawl.org/faq/)')).toBe(
      true,
    );
    expect(
      isBlockedAgent(
        'Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)',
      ),
    ).toBe(true);
  });

  it('does not match AI search crawlers or user-triggered fetchers', () => {
    for (const agent of [
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ChatGPT-User/1.0; +https://openai.com/bot)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-SearchBot/1.0; +https://www.anthropic.com)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)',
    ]) {
      expect(isBlockedAgent(agent)).toBe(false);
    }
  });

  it('does not match browsers or search engine crawlers', () => {
    expect(
      isBlockedAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
      ),
    ).toBe(false);
    expect(
      isBlockedAgent(
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      ),
    ).toBe(false);
    expect(
      isBlockedAgent(
        'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      ),
    ).toBe(false);
    expect(
      isBlockedAgent(
        'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
      ),
    ).toBe(false);
    expect(isBlockedAgent(null)).toBe(false);
    expect(isBlockedAgent('')).toBe(false);
  });
});
