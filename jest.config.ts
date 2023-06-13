import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	verbose: true,
	automock: true,
	testPathIgnorePatterns: ['./node_modules/'],

}
export default config
