

import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'

import LoadingCard from 'app/components/cards/loading-card/index'
import ErrorBoundary from 'app/components/error-boundary/ErrorBoundary'

import styles from './page.module.css'
import Header from './components/header/index'
import { getJokesAsJson } from '../utils/get-data/reddit/joke'
// TODO: suspense not working https://swr.vercel.app/docs/suspense#server-side-rendering
const Board = dynamic(() => import('app/components/Board'), {
  loading: () => <LoadingCard />
})

 const Home = async () => {
	const data = await getJokesAsJson()
	return (
	<main className={styles.MainContainer}>
			<Header text='Random jokes from Reddit'/>
			<div className={styles.PageContainer}>
			<ErrorBoundary>
				{/* <Suspense fallback={<LoadingCard />}> */}
					<Board fallbackData={data.data.children}/>
				{/* </Suspense> */}
			</ErrorBoundary>
			<Toaster position="top-right"/>
			</div>
		</main>
  )
}

export default Home
