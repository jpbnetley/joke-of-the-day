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
      console.log(jokes.json())
      return jokes.json();
    } catch (error) {
      console.error("could not fetch jokes from: ", url);
      console.error(error)
    }
  }
/**
 * Gets the amount of jokes that was retrieved,
 * and then chooses a random joke
 * @param {*} length 
 */
  getRandomJokeIndex(length) {
    const start = Math.round(Math.random * 100, 0);
    if (start > length) {
      return this.getRandomJoke(length);
    } else {
      return start;
    }
  }
  /**
   * Formats the joke object to be a `Joke` component
   * @param {*} jokeObject the response from the url (in this case, catering for reddit.)
   */
  formatJoke(jokeObject) {
    const { title, selftext, url } = jokeObject;

    return <Joke title={title} joke={selftext} url={url} />;
  }

  /** 
   * Gets a random joke out of state
   */
  getRandomJoke() {
    let { jokes } = this.state;

    if (jokes.length > 0) {
      let jokeIndex = this.getRandomJokeIndex();
      let currentJoke = jokes[jokeIndex];
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