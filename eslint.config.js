import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'
import vitest from '@vitest/eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'

const config = defineConfig(
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ],
    files: ['src/**/*.{js,jsx,ts,tsx}']
  },
  ...nextVitals,
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  eslintPluginPrettier,
  {
    plugins: {
      vitest
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals
      },
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
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
  },
  eslintConfigPrettier
)

export default config
