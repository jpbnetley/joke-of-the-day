import './App.css';
import Board from './components/Board'
import { ToastContainer } from 'react-toastify';

function App() {
  let jokeUrl = "https://www.reddit.com/r/Jokes/.json"
  return (
    <div className="App">
      <header className="App-header">
        <Board url={jokeUrl}/>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
