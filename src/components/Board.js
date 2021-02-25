import React from 'react'
import Joke from './Joke'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    try {
      const jokesJson = await this.getJokesAsJson();
      const jokes = jokesJson.data.children;
      this.setState({
        jokes: jokes,
      });
    } catch (error) {
      console.error("could not update board component");
      console.error("status: ", error);
    }
  }
  /** 
   * Requests a joke from the url
   */
  async getJokesAsJson() {
    const { url } = this.props;
    try {
      const jokes = await fetch(url);
      return await jokes.json();
    } catch (error) {
      console.error("could not fetch jokes from: ", url);
      console.error(error)
    }
  }
/**
 * Gets the amount of jokes that was retrieved,
 * and then chooses a random joke
 * @param {*} length the array length
 */
  getRandomJokeIndex(length) {
    const start = Math.round(Math.random() * 10, 0);
    if (start > length) {
        console.log("out of bounds")
      return this.getRandomJokeIndex(length);
    } else {
      return start;
    }
  }
  /**
   * Formats the joke object to be a `Joke` component
   * @param {*} jokeObject the response from the url (in this case, catering for reddit.)
   */
  formatJoke(jokeObject) {
      console.log("formatting joke")
    const { title, selftext, url } = jokeObject.data;
    return <Joke title={title} joke={selftext} url={url} />;
  }

  /** 
   * Gets a random joke out of state
   */
  getRandomJoke() {
    let { jokes } = this.state;
    if (jokes.length > 0) {
      const jokeIndex = this.getRandomJokeIndex(jokes.length);
      const currentJoke = jokes[jokeIndex];
      console.log("current joke", currentJoke)
      return this.formatJoke(currentJoke);
    } else {
      return <Joke />;
    }
  }

  render() {
    return <div>{this.getRandomJoke()}</div>;
  }
}

export default Board;