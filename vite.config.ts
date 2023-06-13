import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: [
			{
				find: 'api',
				replacement: path.resolve(__dirname, 'src/api'),
			},
			{
				find: 'components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{
				find: 'utils',
				replacement: path.resolve(__dirname, 'src/utils'),
			},
		],
	},
	plugins: [react()],
	test: {
		globals: true,
	},
	base: '/joke-of-the-day/',
})
