import { Toaster } from 'react-hot-toast'
import { StrictMode, lazy, Suspense } from 'react'

const Board = lazy(() => import('components/Board'))

import './App.css'
import LoadingCard from 'components/cards/loading-card'
import ErrorBoundary from 'components/error-boundary/ErrorBoundary'

function App() {
	return (
		
		<StrictMode>
			<div className="App">
				<header className="App-header">
					<ErrorBoundary>
						<Suspense fallback={<LoadingCard />}>
							<Board />
						</Suspense>
					</ErrorBoundary>
					<Toaster position="top-right"/>
				</header>
			</div>
		</StrictMode>
	)
}

export default App
