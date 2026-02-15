import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import nextVitals from 'eslint-config-next/core-web-vitals'
import vitest from '@vitest/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const config = defineConfig(
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ]
  },
  ...nextVitals,
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      vitest
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals
      },
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
      }
    },
    rules: {
      ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ]
    }
  }
)

export default config
