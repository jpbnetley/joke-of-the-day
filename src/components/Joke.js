import React from 'react'

const Joke = (props) => {
  const { title, joke, link } = props

  if (!(title && joke && link)) return <p></p>

  return (
    <div>
      <h1>{title}</h1>
      <p>{joke}</p>
      <a target="_blank" rel="noreferrer" href={link}>
        source
      </a>
    </div>
  )
}

export default Joke
