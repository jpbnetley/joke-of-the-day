import { toast } from 'react-toastify'
import { RedditJokeResponse } from 'types/reddit'

const URL = 'https://www.reddit.com/r/Jokes/.json'

/**
 * Requests a joke from the url
 */
export const getJokesAsJson = async (signal: AbortSignal) => {
  try {
    toast.info('getting jokes')
    const jokes = await fetch(URL, { signal })
    const jokeJson = await jokes.json()
    return jokeJson
  } catch (error) {
    console.error('could not fetch jokes from: ', URL, error)
  }
}

/**
 * Skips the first 2 indexes as they are pinned comments on r/jokes
 * @param {int} index
 */
export const skipFirst2Jokes = (index: number) => {
  return index !== 0 && index !== 1
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
  } else {
    return randomIndex
  }
}

/**
 * Gets a random joke out of state
 */
export const getRandomJoke = (
  jokes: RedditJokeResponse[]
): RedditJokeResponse => {
  if (!jokes.length) return {}

  const jokeIndex = getRandomJokeIndex(jokes.length)
  const currentJoke = jokes[jokeIndex]

  const { title, selftext } = currentJoke?.data ?? {}

  if (!(title ?? selftext)) return getRandomJoke(jokes)

  return currentJoke
}
