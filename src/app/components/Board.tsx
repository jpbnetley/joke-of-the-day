'use client'

import { useEffect, useState } from 'react'
import { SWRConfiguration } from 'swr'

import * as jokeApi from 'utils/get-data/reddit/joke'
import Joke from 'app/components/joke'
import Card from 'app/components/cards/card'
import getJokes from 'utils/get-data/jokes'
import { RedditJoke, RedditJokeResponse } from 'types/models/reddit'
import useGetData from 'utils/promises/useGetData'
import useIsMounted from 'utils/hooks/useIsMounted'

const JOKE_FALLBACK: RedditJoke = { title: '', selftext: '', url: '' }

export interface BoardProps {
  fallbackData?: RedditJokeResponse[]
}

const Board = ({ fallbackData }: BoardProps) => {
  const isMounted = useIsMounted()
  const [shouldRefresh, setRefresh] = useState<boolean>(false)
  const [redditJoke, setRedditJoke] = useState<RedditJoke>()
  
  const { data: jokes, isLoading, mutate } = useGetData('jokes', getJokes, { /*suspense: true,*/ fallbackData } satisfies SWRConfiguration)

  const handleHardRefresh = () => mutate()

  const handleRefreshJokeClick = () => setRefresh(shouldRefresh => !shouldRefresh)

  useEffect(() => {
    const setRandomJoke = () => {
      if (isLoading || !jokes) return
      const joke = jokeApi.getRandomJoke(jokes)
      const redditJoke = joke?.data
      if (isMounted) {
        setRefresh(shouldRefresh => !shouldRefresh)
        setRedditJoke(redditJoke)
      }
    }

    if (jokes?.length && (!redditJoke || shouldRefresh)) setRandomJoke()
  }, [isLoading, isMounted, jokes, redditJoke, shouldRefresh])

  const { title, selftext, url } = redditJoke ?? JOKE_FALLBACK
  return (
		<Card>
			<Joke title={title} joke={selftext} link={url} />
			<button type="button" onClick={handleRefreshJokeClick}>
        Random joke
			</button>
      <button type="button" onClick={handleHardRefresh}>
        Fetch new jokes from reddit
			</button>
		</Card>
  )
}

export default Board
