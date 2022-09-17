import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import * as jokeApi from 'api/joke'
import Joke from 'components/Joke'
import Card from 'components/cards/Card'
import LoadingCard from 'components/cards/LoadingCard'

import { RedditJokeResponse } from 'types/reddit'

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
        toast.info('getting jokes')
        const jokesJson = await jokeApi.getJokesAsJson(abortController.signal)
        const jokes = jokesJson.data.children
        setJokes(jokes)
        setIsLoading(false)
      } catch (error) {
        console.error('status: ', error)
        toast.error('Could not load jokes')
        setIsLoading(false)
      }
    }
    fetchJokes()

    return () => abortController.abort()
  }, [])

  const joke = jokeApi.getRandomJoke(jokes)
  if (isLoading) return <LoadingCard />

  const redditJoke = joke?.data
  if (!redditJoke) return null

  const { title, selftext, url } = redditJoke

  return (
    <Card>
      <Joke title={title} joke={selftext} link={url} />
      <button type="button" onClick={handleRefreshJokeClick}>
        Refresh joke
      </button>
    </Card>
  )
}

export default Board
