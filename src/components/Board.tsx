import { useState } from 'react'
import useSWR from 'swr'

import * as jokeApi from 'api/joke'
import Joke from 'components/Joke'
import Card from 'components/cards/Card'
import getJokes from 'utils/get-data/jokes'

const Board = () => {
	const [shouldRefresh, setRefresh] = useState<boolean>(false)

	const handleRefreshJokeClick = () => setRefresh(!shouldRefresh)

	const { data: jokes } = useSWR('jokes', getJokes, { suspense: true })

	const joke = jokeApi.getRandomJoke(jokes)

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
