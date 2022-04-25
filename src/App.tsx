import React from 'react';
import logo from './logo.svg';
import F2Flogo from './F2F-Logo-2-color-24.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={F2Flogo} className="App-logo" alt="F2F Logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
