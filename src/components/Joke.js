import React from 'react'

class Joke extends React.Component {
    render() {
        let {title, joke, link} = this.props
        return (
          <div>
            <h1>{title}</h1>
            <p>{joke}</p>
            <a href={link}>source</a>
          </div>
        );
    }
}

export default Joke;