import { useEffect, useState } from 'react'

import * as jokeApi from 'api/joke'
import Joke from 'components/joke'
import Card from 'components/cards/card'
import getJokes from 'utils/get-data/jokes'
import { RedditJoke } from 'types/models/reddit'
import useGetData from 'utils/promises/useGetData'

const JOKE_FALLBACK: RedditJoke = {title: '', selftext: '', url: ''}


const Board = () => {
	const [shouldRefresh, setRefresh] = useState<boolean>(false)
	const [redditJoke, setRedditJoke] = useState<RedditJoke>()

	const handleRefreshJokeClick = () => setRefresh(!shouldRefresh)

	const { data: jokes } = useGetData('jokes',getJokes, { suspense: true })

	useEffect(() => {
		const setRandomJoke = () => {
			if (!jokes) return
			const joke = jokeApi.getRandomJoke(jokes)
			const redditJoke = joke?.data

			setRefresh(!shouldRefresh)
			setRedditJoke(redditJoke)
		}

		if (jokes?.length && (!redditJoke || shouldRefresh)) setRandomJoke()
	}, [jokes, setRedditJoke, shouldRefresh])


	const { title, selftext, url } = redditJoke ?? JOKE_FALLBACK
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
