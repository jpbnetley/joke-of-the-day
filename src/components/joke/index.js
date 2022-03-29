import React from 'react'
import style from './styles.module.css'

const Joke = ({ title, joke, link }) => {
  if (!(title && joke && link)) return <p></p>

  return (
    <div>
      <h1>{title}</h1>
      <p>{joke}</p>
      <a className={style.link} target="_blank" rel="noreferrer" href={link}>
        source
      </a>
    </div>
  )
}

export default Joke
