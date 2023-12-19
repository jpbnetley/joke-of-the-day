import {getJokesAsJson}from 'utils/get-data/reddit/joke'

export type JokeConfig = {
	signal?: AbortSignal
}
const getJokes = async (props?: JokeConfig) => {
  const { signal } = props ?? {}
  const jokesJson = await getJokesAsJson(signal)
  const jokes = jokesJson.data.children

  return jokes
}

export default getJokes
