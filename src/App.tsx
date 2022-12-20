import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'

import Board from 'components/Board'

import './App.css'

function App() {
	return (
		<StrictMode>
			<div className="App">
				<header className="App-header">
					<Board />
					<Toaster position="top-right"/>
				</header>
			</div>
		</StrictMode>
	)
}

export default App
