import { ToastContainer } from 'react-toastify'

import Board from 'components/Board'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
        <ToastContainer />
      </header>
    </div>
  )
}

export default App
