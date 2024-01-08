import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [show, toggleShow]=useState(true);
  function myfun()
  {
    alert('hello');
  }
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={() => toggleShow(!show)}>{show ? "HideMe" : "ShowMe"}</button>
          {show && <h2> Hi, I'm Renuka</h2>}
          <button onClick={myfun} color='white'>Click Me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
