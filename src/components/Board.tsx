import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import * as jokeApi from 'api/joke'
import Joke from 'components/Joke'
import Card from 'components/cards/Card'
import LoadingCard from 'components/cards/LoadingCard'

import { RedditJokeResponse } from 'types/reddit'

const Board = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [jokes, setJokes] = useState<RedditJokeResponse[]>([])
	const [shouldRefresh, setRefresh] = useState<boolean>(false)

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
				setIsLoading(false)

				if (error instanceof Error) {
					if (abortController.signal.aborted) return
					console.error(error.message)
					throw new Error(error.message)
				}

				console.error(error)
				throw new Error(String(error))
			}
		}
		const jokesPromise = fetchJokes()
		toast.promise(jokesPromise, {
			loading: 'Getting jokes',
			success: 'Got the Jokes',
			error: 'Could not load jokes',
		})

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
