import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import * as jokeApi from 'api/joke'
import Joke from 'components/Joke'
import Card from 'components/cards/Card'
import LoadingCard from 'components/cards/LoadingCard'

import { RedditJoke, RedditJokeResponse } from 'types/reddit'

const Board = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [jokes, setJokes] = useState<RedditJokeResponse[]>([])
  const [shouldRefresh, setRefresh] = useState<Boolean>(false)

  const handleRefreshJokeClick = () => setRefresh(!shouldRefresh)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchJokes = async () => {
      try {
        setIsLoading(true)
        const jokesJson = await jokeApi.getJokesAsJson(abortController.signal)
        const jokes = jokesJson.data.children
        setJokes(jokes)
        setIsLoading(false)
      } catch (error) {
        toast.error('Could not load jokes')
        console.error('status: ', error)
        setIsLoading(false)
      }
    }
    fetchJokes()

    return () => abortController.abort()
  }, [])

  /**
   * Formats the joke object to be a `Joke` component
   * @param {RedditJokeResponse} jokeObject the response from the url (in this case, catering for reddit.)
   */
  const formatJoke = (jokeObject: RedditJokeResponse) => {
    const redditJoke = jokeObject?.data

    if (isLoading) return <LoadingCard />
    if (!redditJoke) return null

    const { title, selftext, url } = redditJoke
    return <Joke title={title} joke={selftext} link={url} />
  }

  const joke = jokeApi.getRandomJoke(jokes)
  const formattedJoke = formatJoke(joke)

  if (!formattedJoke) return null

  return (
    <Card>
      {formattedJoke}
      <button type="button" onClick={handleRefreshJokeClick}>
        Refresh joke
      </button>
    </Card>
  )
}

export default Board
