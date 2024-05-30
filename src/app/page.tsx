import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import LoadingCard from 'components/cards/loading-card/index'
import ErrorBoundary from 'components/error-boundary/index'
import Board from 'components/board'
import PageHeader from 'components/page-header/index'
import { handleFetchRedditJokes } from 'utils/get-data/reddit/handle-fetch-reddit-jokes'
import styles from './page.module.css'

const Home = async () => {
  const redditJokes = await handleFetchRedditJokes()

  return (
    <main>
      <PageHeader text="Random jokes from Reddit" />
      <div className={styles.mainContainer}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingCard />}>
            <Board fallbackData={redditJokes} />
          </Suspense>
        </ErrorBoundary>
        <Toaster position="top-right" />
      </div>
    </main>
  )
}

export default Home
