import { PropsWithChildren } from 'react'

import style from './styles.module.css'

type Props = {
  title: string
  joke: string
  link: string
} & PropsWithChildren

const Joke = ({ title, joke, link }: Props) => {
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
