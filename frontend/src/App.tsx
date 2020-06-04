import React, {useState} from 'react';
import './App.css';
import Header from './header'

function App() {

  let [counter, setCounter] = useState(1111);

  function onClickButton() {
    setCounter(counter )
  }

  return (
        <div>
          <Header title="Hello World" />

          <h3>{counter}</h3>
          <button onClick={onClickButton}>Aumentar</button>
        </div>
  );
}

export default App;
