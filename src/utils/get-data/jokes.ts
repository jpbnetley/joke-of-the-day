import * as jokeApi from 'utils/get-data/reddit/joke'

export type Props = {
	signal?: AbortSignal
}
const getJokes = async (props?: Props) => {
  const { signal } = props ?? {}
  const jokesJson = await jokeApi.getJokesAsJson(signal)
  const jokes = jokesJson.data.children

  return jokes
}

export default getJokes
