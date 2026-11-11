import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import promise from 'eslint-plugin-promise'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig(
  { ignores: ['node_modules/', '.next/', 'out/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  promise.configs['flat/recommended'],
  prettierRecommended,
  {
    // tsconfig.json includes all JS with checkJs, so the project service
    // can type it.
    files: ['**/*.js'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked
    ].map((config) => ({ ...config, files: ['**/*.js'] })),
    languageOptions: {
      parserOptions: { projectService: true }
    }
  },
  {
    // eslint.config.mjs has no tsconfig coverage: untyped rules only.
    files: ['*.mjs'],
    extends: [tseslint.configs.disableTypeChecked].map((config) => ({
      ...config,
      files: ['*.mjs']
    }))
  },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.node, ...globals.browser }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  {
    files: ['**/*.cjs', 'playwright.config.js', 'tests/**/*.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' }
  }
)
