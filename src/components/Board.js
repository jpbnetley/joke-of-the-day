import React from 'react'
import Joke from './Joke'

class Board extends React.Component {
  async getJokesAsJson() {
    const { url } = this.props;

    let jokes = await fetch(url);
    return jokes.json.catch((e) => console.error("could not fetch jokes"));
  }

  getRandomJokeIndex(length) {
    let start = Math.round(Math.random * 100, 0);
    if (start > length) {
      return this.getRandomJoke(length);
    } else {
      return start;
    }
  }

  formatJoke(jokeObject) {
    let { title, selftext, url } = jokeObject;

    return <Joke title={title} joke={selftext} url={url} />;
  }

  async getRandomJoke() {
    let jokesJson = await this.getJokesAsJson();
    let jokes = jokesJson.data.children;
    let jokeIndex = this.getRandomJokeIndex();
    let currentJoke = jokes[jokeIndex];
    return this.formatJoke(currentJoke);
  }

  /*TODO: component did mount. Shouldn't await in render function.
    would use state to update render fuction when the joke is loaded.
  */

  render() {
    return <div>{this.getRandomJoke().catch(({status}) => {
                console.error("Could not fetch jokes.", status)
    })}</div>;
  }
}

export default Board;