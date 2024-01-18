import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import LoadingCard from 'app/components/cards/loading-card/index'
import ErrorBoundary from 'app/components/error-boundary/index'
import Board from 'app/components/board'
import { handleFetchRedditJokes } from 'utils/get-data/reddit/handle-fetch-reddit-jokes'
import styles from './page.module.css'
import PageHeader from './components/page-header/index'

 const Home = async () => {
	const redditJokes = await handleFetchRedditJokes()
	
	return (
	<main>
			<PageHeader text='Random jokes from Reddit'/>
			<div className={styles.mainContainer}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingCard />}>
					<Board fallbackData={redditJokes}/>
				</Suspense>
			</ErrorBoundary>
			<Toaster position="top-right"/>
			</div>
		</main>
  )
}

export default Home
