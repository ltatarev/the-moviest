import coreWebVitals from 'eslint-config-next/core-web-vitals';
import next from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'next-env.d.ts',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  ...coreWebVitals,
  ...next,
  prettierRecommended,
  {
    rules: {
      'jsx-a11y/alt-text': 'off',
    },
  },
  {
    // Studio cards are exported to PNG from the DOM: they need plain <img>
    // pointing at the same-origin image proxy, not next/image.
    files: ['src/modules/studio/**'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
];
