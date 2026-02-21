import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import vitest from '@vitest/eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintPlugnReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

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
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ]),
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  eslintPluginPrettier,
  {
    settings: {
      react: { version: '19' } // Avoids auto-detection crash https://github.com/vercel/next.js/issues/89764
    }
  },
  {
    plugins: {
      vitest,
      react: eslintPlugnReact,
      'react-hooks': eslintPluginReactHooks
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
      ...eslintPlugnReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off'
    }
  },
  eslintConfigPrettier
)

export default config
