import type { HeatmapData, HeatmapSeason } from './studio/types';

/**
 * Episode rankings for the public episode ratings page. Pure functions, so
 * the page and its tests share one source of truth.
 */

/** An episode with fewer TMDB votes than this is not ranked. */
export const MIN_VOTES = 5;

const TOP_LIMIT = 10;
const BOTTOM_LIMIT = 5;

export type RankedEpisode = {
  season: number;
  episode: number;
  name: string;
  vote: number;
  votes: number;
};

export type SeasonSummary = {
  number: number;
  episodes: number;
  rated: number;
  /** Mean of the rated episodes, or null when none has enough votes. */
  average: number | null;
  best: RankedEpisode | null;
};

export type EpisodeSummary = {
  showId: number;
  title: string;
  episodes: number;
  rated: number;
  average: number | null;
  top: Array<RankedEpisode>;
  bottom: Array<RankedEpisode>;
  seasons: Array<SeasonSummary>;
  bestSeason: SeasonSummary | null;
  worstSeason: SeasonSummary | null;
};

function round(value: number): number {
  return Math.round(value * 10) / 10;
}

function mean(values: Array<number>): number | null {
  return values.length > 0
    ? round(values.reduce((sum, value) => sum + value, 0) / values.length)
    : null;
}

/** Earlier episodes first: season, then episode. */
function byPosition(a: RankedEpisode, b: RankedEpisode): number {
  return a.season - b.season || a.episode - b.episode;
}

function rankedEpisodes(seasons: Array<HeatmapSeason>): Array<RankedEpisode> {
  return seasons
    .flatMap((season) =>
      season.episodes
        .filter((episode) => episode.votes >= MIN_VOTES)
        .map((episode) => ({
          season: season.number,
          episode: episode.number,
          name: episode.name,
          vote: episode.vote,
          votes: episode.votes,
        })),
    )
    .sort(byPosition);
}

/** Ties go to the earlier episode, the same rule as the studio heatmap. */
export function summarizeEpisodes(data: HeatmapData): EpisodeSummary {
  const ranked = rankedEpisodes(data.seasons);
  const descending = [...ranked].sort(
    (a, b) => b.vote - a.vote || byPosition(a, b),
  );
  const ascending = [...ranked].sort(
    (a, b) => a.vote - b.vote || byPosition(a, b),
  );

  const seasons = data.seasons.map((season) => {
    const own = ranked.filter((episode) => episode.season === season.number);

    return {
      number: season.number,
      episodes: season.episodes.length,
      rated: own.length,
      average: mean(own.map((episode) => episode.vote)),
      best:
        [...own].sort((a, b) => b.vote - a.vote || byPosition(a, b))[0] ?? null,
    };
  });

  // Compare seasons only when there is more than one rated season.
  const ratedSeasons = seasons.filter((season) => season.average !== null);
  const bySeasonScore = [...ratedSeasons].sort(
    (a, b) =>
      (b.average as number) - (a.average as number) || a.number - b.number,
  );
  const hasSeasonRanking = ratedSeasons.length > 1;

  // With only a few rated episodes, a "worst" list repeats the "best" list.
  const bottomLimit = Math.min(
    BOTTOM_LIMIT,
    Math.max(0, ranked.length - TOP_LIMIT),
  );

  return {
    showId: data.show.id,
    title: data.show.title,
    episodes: data.seasons.reduce(
      (sum, season) => sum + season.episodes.length,
      0,
    ),
    rated: ranked.length,
    average: mean(ranked.map((episode) => episode.vote)),
    top: descending.slice(0, TOP_LIMIT),
    bottom: ascending.slice(0, bottomLimit),
    seasons,
    bestSeason: hasSeasonRanking ? bySeasonScore[0] : null,
    worstSeason: hasSeasonRanking
      ? bySeasonScore[bySeasonScore.length - 1]
      : null,
  };
}

export function formatVote(vote: number): string {
  return vote.toFixed(1);
}

/** "season 5, episode 14" */
export function episodePosition(episode: RankedEpisode): string {
  return `season ${episode.season}, episode ${episode.episode}`;
}

/** "S5 E14" */
export function episodeCode(episode: RankedEpisode): string {
  return `S${episode.season} E${episode.episode}`;
}

function quoted(episode: RankedEpisode): string {
  return episode.name ? `“${episode.name}”` : `Episode ${episode.episode}`;
}

/** The one-sentence answer at the top of the page and in its description. */
export function getEpisodeAnswer(summary: EpisodeSummary): string {
  const best = summary.top[0];

  if (!best) {
    return `${summary.title} does not have enough TMDB episode ratings yet to rank its episodes.`;
  }

  return `The best-rated episode of ${summary.title} is ${quoted(best)} (${episodePosition(best)}), with ${formatVote(best.vote)}/10 from ${best.votes} TMDB users.`;
}

export type Faq = { question: string; answer: string };

/** Questions people ask about a show's episodes, answered from the data. */
export function getEpisodeFaq(summary: EpisodeSummary): Array<Faq> {
  const faq: Array<Faq> = [];
  const best = summary.top[0];
  const worst = summary.bottom[0];

  if (!best) {
    return faq;
  }

  faq.push({
    question: `What is the best episode of ${summary.title}?`,
    answer: getEpisodeAnswer(summary),
  });

  if (worst) {
    faq.push({
      question: `What is the worst-rated episode of ${summary.title}?`,
      answer: `The lowest-rated episode of ${summary.title} is ${quoted(worst)} (${episodePosition(worst)}), with ${formatVote(worst.vote)}/10 from ${worst.votes} TMDB users.`,
    });
  }

  if (summary.bestSeason && summary.worstSeason) {
    faq.push({
      question: `Which season of ${summary.title} is the best?`,
      answer: `Season ${summary.bestSeason.number} has the highest average episode rating, ${formatVote(summary.bestSeason.average as number)}/10. Season ${summary.worstSeason.number} has the lowest, ${formatVote(summary.worstSeason.average as number)}/10.`,
    });
  }

  faq.push({
    question: `How many episodes of ${summary.title} are there?`,
    answer: `${summary.title} has ${summary.episodes} aired episodes in ${summary.seasons.length} ${summary.seasons.length === 1 ? 'season' : 'seasons'}.`,
  });

  return faq;
}
