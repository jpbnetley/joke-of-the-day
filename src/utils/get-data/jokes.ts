import * as jokeApi from 'utils/get-data/reddit/joke'
import { RedditJokeResponse } from 'types/models/reddit'


// TODO: check fetch data handler

const getJokes = async () => {
	const jokesJson = await jokeApi.getJokesAsJson()
	const jokes = jokesJson.data.children

	return jokes satisfies RedditJokeResponse[]
}

export default getJokes