import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-display"><span data-test="count">{count}</span></h1>
      <button type="button" data-test="increment-button" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
}

export default App;
