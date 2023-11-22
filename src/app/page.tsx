import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import LoadingCard from 'app/components/cards/loading-card/index'
import ErrorBoundary from 'app/components/error-boundary/ErrorBoundary'
import Board from 'app/components/Board'

import styles from './page.module.css'
import Header from './components/header/index'
import { getJokesAsJson } from 'utils/get-data/reddit/joke'

 const Home = async () => {
	const data = await getJokesAsJson()
	return (
	<main className={styles.MainContainer}>
			<Header text='Random jokes from Reddit'/>
			<div className={styles.PageContainer}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingCard />}>
					<Board fallbackData={data.data.children}/>
				</Suspense>
			</ErrorBoundary>
			<Toaster position="top-right"/>
			</div>
		</main>
  )
}

export default Home
