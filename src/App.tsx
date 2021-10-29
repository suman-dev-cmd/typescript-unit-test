import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-display">0</h1>
      <button type="button" data-test="increment-button">Increment</button>
    </div>
  );
}

export default App;
