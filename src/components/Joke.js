import React from 'react'

class Joke extends React.Component {
  render() {
    const { title, joke, link } = this.props;
    console.log(link)

    if (!(title && joke && link)) {
      return <p></p>;
    } else {
      return (
        <div>
          <h1>{title}</h1>
          <p>{joke}</p>
          <a target="_blank" rel="noreferrer" href={link}>
            source
          </a>
        </div>
      );
    }
  }
}

export default Joke;