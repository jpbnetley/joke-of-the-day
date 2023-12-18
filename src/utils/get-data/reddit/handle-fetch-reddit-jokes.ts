import { getJokesAsJson } from "./joke"

/**
 * fetches the reddit jokes, and on error - returns an empty joke list
 * @returns reddit hokes
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