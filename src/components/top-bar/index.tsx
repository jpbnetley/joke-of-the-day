import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './styles.module.css'

export type TopBarProps = {
  children: ReactNode
}
const TopBar = () => {
  return (
    <header>
      <Link href="https://www.reddit.com/r/jokes" className={styles.link}>
        Reddit jokes
      </Link>
    </header>
  )
}

export default TopBar
