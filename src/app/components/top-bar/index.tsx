import Link from 'next/link'
import { ReactNode } from 'react'

export type TopBarProps = {
  children: ReactNode
}
const TopBar = () => {
  return (
    <div>
      <Link href='https://www.reddit.com/r/jokes'>
        Reddit
      </Link>
    </div>
  )
}

export default TopBar
