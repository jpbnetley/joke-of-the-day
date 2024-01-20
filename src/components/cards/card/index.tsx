import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Card = ({ children }: PropsWithChildren) => (
	<div className={styles.card}>{children}</div>
)

export default Card
