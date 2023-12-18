import { ReactNode} from 'react'
import { Metadata } from 'next'

import TopBar from 'app/components/top-bar/index'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joke of the day',
  description: 'Finds random jokes form reddit'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
		<html lang="en">
			<body>
				<TopBar />
				{children}
			</body>
		</html>
  )
}
