// import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <div className="App" data-test="app-component">
//       <h1 data-test="counter-display"><span data-test="count">{count}</span></h1>
//       <button type="button" data-test="increment-button" onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import GussedWord from './component/gussedword/GussedWord';
import Input from './component/inputs/Input';
import Congrates from './component/congrates/Congrates';

interface GWProp{
  guessedWord:string,
  letterMatchCount:number
}
export interface GWAProp{
  guessedWords:GWProp[]
}
const App = () => {
  const success = false;
  const secretWord = 'party';
  const guessedWords:any =[];

  return (
    <div data-test="app-component">
      <h1>Jotto</h1>
      <Congrates success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GussedWord guessedWords={guessedWords}/>
    </div>
  )
}

export default App

