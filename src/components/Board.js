import { useEffect, useState } from 'react'
import Joke from './joke'
import Card from './card'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as jokeApi from '../api/joke'
import Loader from './loader'

const Board = () => {
  const [jokes, setJokes] = useState([])
  const [shouldRefresh, setRefresh] = useState(false)

  const onUpdateClick = () => setRefresh(!shouldRefresh)

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
  const formatJoke = (jokeObject) => {
    const { title, selftext, url } = jokeObject?.data
    return <Joke title={title} joke={selftext} link={url} />
  }

  if (jokes?.length === 0)
    return (
      <Card>
        <Loader />
      </Card>
    )

  const joke = jokeApi.getRandomJoke(jokes)
  const renderedJoke = formatJoke(joke)

  return (
    <Card>
      {renderedJoke}
      <button type="button" onClick={onUpdateClick}>
        Refresh joke
      </button>
    </Card>
  )
}

export default Board
