import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Joke from 'components/joke'
import Card from 'components/card'
import * as jokeApi from 'api/joke'

import Loader from './loader'
import { RedditJokeResponse } from 'types/reddit'

const Board = () => {
  const [jokes, setJokes] = useState([])
  const [shouldRefresh, setRefresh] = useState(false)

  const handleUpdateClick = () => setRefresh(!shouldRefresh)

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const jokesJson = await jokeApi.getJokesAsJson()
        const jokes = jokesJson.data.children
        setJokes(jokes)
      } catch (error) {
        toast.error('Could not load jokes')
        console.error('could not onUpdateClick board component')
        console.error('status: ', error)
      }
    }
    fetchJokes()
  }, [])

  /**
   * Formats the joke object to be a `Joke` component
   * @param {*} jokeObject the response from the url (in this case, catering for reddit.)
   */
  const formatJoke = (jokeObject: RedditJokeResponse) => {
    const redditJoke = jokeObject?.data

    if (!(jokes?.length || redditJoke))
      return (
        <Card>
          <Loader />
        </Card>
      )

    const { title, selftext, url } = redditJoke ?? {
      title: '',
      selftext: '',
      url: '',
    }
    return <Joke title={title} joke={selftext} link={url} />
  }

  const joke = jokeApi.getRandomJoke(jokes)

  return (
    <Card>
      {formatJoke(joke)}
      <button type="button" onClick={handleUpdateClick}>
        Refresh joke
      </button>
    </Card>
  )
}

export default Board
