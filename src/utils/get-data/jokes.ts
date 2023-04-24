import * as jokeApi from 'utils/get-data/reddit/joke'
import { RedditJokeResponse } from 'types/models/reddit'


// TODO: check fetch data handler
type Props = {
	signal?: AbortSignal
}
const getJokes = async ({signal}: Props) => {
	const jokesJson = await jokeApi.getJokesAsJson(signal)
	const jokes = jokesJson.data.children

	return jokes satisfies RedditJokeResponse[]
}

export default getJokes