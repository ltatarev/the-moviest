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
];
