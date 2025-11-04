// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore common generated folders (optional but tidy)
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'] },

  // 1) ESLint's recommended rules for JS
  js.configs.recommended,

  // 2) Your project settings & custom rules
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      // examples—tweak as you like:
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // 3) Prettier LAST — turns off any conflicting stylistic rules
  prettier,
];
