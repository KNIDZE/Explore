import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { ignores: ['.next/'] },
  { files: ['./app/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettierRecommended,
  pluginReact.configs.flat.recommended,
];
