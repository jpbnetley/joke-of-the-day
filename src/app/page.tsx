'use client'

import { Toaster } from 'react-hot-toast'
import {  Suspense } from 'react'
import dynamic from 'next/dynamic'

import LoadingCard from 'app/components/cards/loading-card'
import ErrorBoundary from 'app/components/error-boundary/ErrorBoundary'

const Board = dynamic(() => import('app/components/Board'), {
	loading: () => <LoadingCard />
})

import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.MainContainer}>
			<header className={styles.AppHeader}>
        Random jokes from Reddit
			</header>
			
			<div className={styles.PageContainer}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingCard />}>
					<Board />
				</Suspense>
			</ErrorBoundary>
			<Toaster position="top-right"/>
			</div>
		</main>
	)
}
