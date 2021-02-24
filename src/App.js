import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

function App() {
  let jokeUrl = "https://www.reddit.com/r/Jokes/.json"
  return (
    <div className="App">
      <header className="App-header">
        <Board url={jokeUrl}/>
      </header>
    </div>
  );
}

export default App;
