#!/usr/bin/env node
// Writes public/studio/grain.png: a 256px tileable grey noise texture used as
// the film grain on studio cards (an SVG feTurbulence filter exports badly).
//
//   node scripts/generate-grain.mjs
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const SIZE = 256;
const pixels = Buffer.alloc(SIZE * SIZE);

// Deterministic PRNG so re-running the script gives the same file.
let seed = 0x9e3779b9;
const random = () => {
  seed ^= seed << 13;
  seed ^= seed >>> 17;
  seed ^= seed << 5;

  return (seed >>> 0) / 0xffffffff;
};

for (let i = 0; i < pixels.length; i++) {
  // Sum of uniforms ≈ gaussian: softer than flat noise.
  const value = (random() + random() + random()) / 3;
  pixels[i] = Math.round(value * 255);
}

mkdirSync('public/studio', { recursive: true });

await sharp(pixels, { raw: { width: SIZE, height: SIZE, channels: 1 } })
  .png({ compressionLevel: 9 })
  .toFile('public/studio/grain.png');

console.log('Wrote public/studio/grain.png');
