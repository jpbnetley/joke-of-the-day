import React from 'react'
import Joke from './Joke'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    try {
      let jokesJson = await this.getJokesAsJson();
      let jokes = jokesJson.data.children;
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
      let jokes = await fetch(url);
      return JSON.parse(jokes);
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
    let start = Math.round(Math.random * 100, 0);
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
    let { title, selftext, url } = jokeObject;

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