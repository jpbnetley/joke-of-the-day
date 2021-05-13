import React from 'react'
import Joke from './Joke'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as jokeApi from '../api/joke'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    try {
      if (this.state.jokes.length > 0) return
      
      const jokesJson = await jokeApi.getJokesAsJson();
      const jokes = jokesJson.data.children;
      this.setState({
        jokes: jokes,
      });
    } catch (error) {
      toast.error("Could not load jokes");
      console.error("could not update board component");
      console.error("status: ", error);
    }
  }

  /**
 * Formats the joke object to be a `Joke` component
 * @param {*} jokeObject the response from the url (in this case, catering for reddit.)
 */
formatJoke(jokeObject) {
  const { title, selftext, url } = jokeObject?.data;
  return <Joke title={title} joke={selftext} link={url} />;
}

  refresh() {
    this.forceUpdate()
  }

  render() {
  const joke = jokeApi.getRandomJoke(this.state)
  const renderedJoke = (joke && this.formatJoke(joke)) || <Joke />

    return <div>
            {renderedJoke}
            <button type="button" onClick={() => this.refresh()}>Refresh joke</button>
        </div>;
  }
}

export default Board;