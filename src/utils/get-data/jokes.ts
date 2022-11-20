import * as jokeApi from 'api/joke'
import { RedditJokeResponse } from 'types/reddit'

const getJokes = async () => {
	const jokesJson = await jokeApi.getJokesAsJson()
	const jokes = jokesJson.data.children

	return jokes as RedditJokeResponse[]
}

export default getJokes