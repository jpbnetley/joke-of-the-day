import { ToastContainer } from 'react-toastify'
import { StrictMode } from 'react'

import Board from 'components/Board'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <StrictMode>
      <div className="App">
        <header className="App-header">
          <Board />
          <ToastContainer />
        </header>
      </div>
    </StrictMode>
  )
}

export default App
