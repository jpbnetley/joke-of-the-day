import { RedditJokeResponse, RedditJsonResponse } from 'types/models/reddit'

const URL = 'https://www.reddit.com/r/Jokes/.json'

/**
 * Requests a joke from the url
 */
export const getJokesAsJson = async (signal?: AbortSignal) => {
  const jokesResponse = await fetch(URL, { signal })

  if (!jokesResponse.ok)
    throw new Error(
      `status: ${jokesResponse.status} statusText: ${jokesResponse.statusText}`,
      { cause: 'reddit joke api' }
    )

  return (await jokesResponse.json()) as RedditJsonResponse
}

/**
 * Skips the first 2 indexes as they are pinned comments on r/jokes
 * @param {number} index
 * @returns {boolean} if the first 2 joke should be skipped
 */
export const skipFirst2Jokes = (index: number): boolean => {
  const skipIndexes = [0, 1]
  return !skipIndexes.includes(index)
}

/**
 * Gets the amount of jokes that was retrieved,
 * and then chooses a random joke
 * @param {number} length the array length
 */
export const getRandomJokeIndex = (length: number): number => {
  const randomIndex = Math.round(Math.random() * 100)
  if (randomIndex > length && skipFirst2Jokes(randomIndex)) {
    return getRandomJokeIndex(length)
  }

  return randomIndex
}

/**
 * Gets a random joke out of state
 */
export const getRandomJoke = (
  jokes: RedditJokeResponse[]
): RedditJokeResponse | null => {
  if (!jokes.length) return null

  const jokeIndex = getRandomJokeIndex(jokes.length)
  const currentJoke = jokes[jokeIndex]

  const { title, selftext } = currentJoke?.data ?? {}

  if (!(title ?? selftext)) return getRandomJoke(jokes)

  return currentJoke
}
