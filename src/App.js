import React, { useState } from 'react';
import Result from './Result';
import './App.css';

function App() {
  const [changeMind, setChangeMind] = useState(true);
  const [count, setCount] = useState(1000);
  const [results, setResults] = useState();
  const monty = async () => {
    const response = await fetch(`http://localhost:8080/montyhall/${count}/${changeMind}`, {
      headers: { // CORS, server is also set up to handle this
        'Origin': window.location.origin
      }
    });
    const json = await response.json();
    setResults(json);
  };
  const play = () => {
    // montyPromise();
    monty();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Monty Hall</h1>
      </header>
      <main className="App-main">
        <form onSubmit={e => e.preventDefault()} className="App-form">
          <div className="App-input">
            <label htmlFor="changeMind">
              You've chosen a door, would you like to change your mind?
            </label>
            <input
              type="checkbox"
              id="changeMind"
              checked={changeMind}
              onChange={(e) => setChangeMind(e.target.checked)} />
          </div>
          <div className="App-input">
            <input
              type="number"
              value={count}
              onChange={e => setCount(e.target.valueAsNumber)} />
          </div>
          <div className="App-actions">
            <button onClick={() => play()}>Play</button>
          </div>
        </form>
        <Result result={results} count={count} />
      </main>
    </div>
  );
}

export default App;
