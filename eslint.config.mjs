import tanstackQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@tanstack/query': tanstackQuery,
    },

    rules: {
      'simple-import-sort/imports': 'error',
      ...tanstackQuery.configs.recommended.rules,
    },
  },
])
