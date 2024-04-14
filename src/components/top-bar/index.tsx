import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './styles.module.css'

export type TopBarProps = {
  children: ReactNode
}
const TopBar = () => {
  return (
    <div>
      <Link href="https://www.reddit.com/r/jokes" className={styles.link}>
        Reddit jokes
      </Link>
    </div>
  )
}

export default TopBar
