import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

/**
 * The cards need weights the site doesn't load (Outfit 300/800, Jakarta
 * italic). Declared here so only studio pages pull them in.
 */

export const studioDisplay = Outfit({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  variable: '--studio-display',
});

export const studioBody = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--studio-body',
});

export const studioFontVariables = `${studioDisplay.variable} ${studioBody.variable}`;
