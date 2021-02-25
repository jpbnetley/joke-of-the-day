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
   * Skips the first 2 indexes as they are pinned comments on r/jokes
   * @param {int} index 
   */
  skipFirst2Jokes(index) {
    return (index !== 0 && index !== 1)
  }

/**
 * Gets the amount of jokes that was retrieved,
 * and then chooses a random joke
 * @param {*} length the array length
 */
  getRandomJokeIndex(length) {
    const randomIndex = Math.round(Math.random() * 100, 0);
    if (randomIndex > length && this.skipFirst2Jokes(randomIndex)) {
      return this.getRandomJokeIndex(length);
    } else {
      return randomIndex;
    }
  }
  /**
   * Formats the joke object to be a `Joke` component
   * @param {*} jokeObject the response from the url (in this case, catering for reddit.)
   */
  formatJoke(jokeObject) {
    const { title, selftext, url } = jokeObject.data;
    return <Joke title={title} joke={selftext} link={url} />;
  }

  /** 
   * Gets a random joke out of state
   */
  getRandomJoke() {
    let { jokes } = this.state;
    if (jokes.length > 0) {
      const jokeIndex = this.getRandomJokeIndex(jokes.length);
      const currentJoke = jokes[jokeIndex];
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