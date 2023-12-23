'use client'

import { useEffect, useState } from 'react'
import { SWRConfiguration } from 'swr'

import Joke from 'app/components/joke/index'
import Card from 'app/components/cards/card/index'
import LoadingCard from 'app/components/cards/loading-card'
import getJokes from 'utils/get-data/jokes'
import { RedditJoke, RedditJokeResponse } from 'types/models/reddit'
import useGetData from 'utils/promises/useGetData'
import useIsMounted from 'utils/hooks/useIsMounted'
import { getRandomJoke } from 'utils/get-data/reddit/joke'

export interface BoardProps {
  fallbackData?: RedditJokeResponse[]
}

const Board = ({ fallbackData }: BoardProps) => {
  const isMounted = useIsMounted()
  const [shouldRefresh, setRefresh] = useState<boolean>(false)
  const [redditJoke, setRedditJoke] = useState<RedditJoke>()
  
  const { 
    data: jokes, 
    isLoading, 
    mutate 
  } = useGetData('jokes', getJokes, { suspense: true, fallbackData } satisfies SWRConfiguration<RedditJokeResponse[]>)

  useEffect(() => {
    const setRandomJoke = () => {
      if (isLoading || !jokes) return
      
      const joke = getRandomJoke(jokes)
      const redditJoke = joke?.data
      if (isMounted) {
        setRefresh(shouldRefresh => !shouldRefresh)
        setRedditJoke(redditJoke)
      }
    }

    if (jokes?.length && (!redditJoke || shouldRefresh)) setRandomJoke()
  }, [isLoading, isMounted, jokes, redditJoke, shouldRefresh])

  if (isLoading) return <LoadingCard />

  const handleHardRefresh = () => mutate()

  const handleRefreshJokeClick = () => setRefresh(shouldRefresh => !shouldRefresh)

  if (!redditJoke) return null

  const { title, selftext, url } = redditJoke
 
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
