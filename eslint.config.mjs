import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jest from 'eslint-plugin-jest'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const config =  [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      jest
    },

    languageOptions: {
      globals: {
        ...jest.environments.globals.globals
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
]

export default config