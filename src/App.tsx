import './App.css';

import Board from './components/Board/Board';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <h1>Matching Cards </h1>
      <h3>Total Score: 0</h3>
      <div className="game-container">
        <Board />
        <History />
      </div>
    </div>
  );
}

export default App;
