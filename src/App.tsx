import { ToastContainer } from 'react-toastify'
import { StrictMode, lazy, Suspense } from 'react'

const Board = lazy(() => import('components/Board'))

import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import LoadingCard from 'components/cards/LoadingCard'
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
					<ToastContainer />
				</header>
			</div>
		</StrictMode>
	)
}

export default App
