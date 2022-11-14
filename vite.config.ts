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
		],
	},
	plugins: [react()],
	test: {
		globals: true,
	},
	base: '/joke-of-the-day/',
})
