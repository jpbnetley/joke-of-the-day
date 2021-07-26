import './App.css'
import Board from './components/Board'
import { ToastContainer } from 'react-toastify'

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
