import { toast } from 'react-toastify'

const url = 'https://www.reddit.com/r/Jokes/.json'

/**
 * Requests a joke from the url
 */
export const getJokesAsJson = async () => {
  try {
    toast.info('getting jokes')
    const jokes = await fetch(url)
    return await jokes.json()
  } catch (error) {
    toast.error('Could not load jokes')
    console.error('could not fetch jokes from: ', url)
    console.error(error)
  }
}

/**
 * Skips the first 2 indexes as they are pinned comments on r/jokes
 * @param {int} index
 */
export const skipFirst2Jokes = (index) => {
  return index !== 0 && index !== 1
}

/**
 * Gets the amount of jokes that was retrieved,
 * and then chooses a random joke
 * @param {*} length the array length
 */
export const getRandomJokeIndex = (length) => {
  const randomIndex = Math.round(Math.random() * 100, 0)
  if (randomIndex > length && skipFirst2Jokes(randomIndex)) {
    return getRandomJokeIndex(length)
  } else {
    return randomIndex
  }
}

/**
 * Gets a random joke out of state
 */
export const getRandomJoke = (jokes) => {
  if (jokes?.length > 0) {
    const jokeIndex = getRandomJokeIndex(jokes.length)
    const currentJoke = jokes[jokeIndex] || getRandomJoke({ jokes })
    return currentJoke
  }
}
