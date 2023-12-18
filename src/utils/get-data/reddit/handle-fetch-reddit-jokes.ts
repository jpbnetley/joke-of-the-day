import { getJokesAsJson } from "./joke"

/**
 * fetches the reddit jokes, if the reddit joke api returns an error,
 * an empty joke list is returned
 * @returns reddit jokes
 */
export const handleFetchRedditJokes = async () =>  {
  try {
    const redditResponse = await getJokesAsJson()

    return redditResponse.data.children
  } catch (error) {
    console.error(error)
    return []
  }
}