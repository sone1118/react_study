import React from "react";
//import Hello from "./hello";
import Wrapper from "./wrapper"
import Counter from "./Counter";
import './App.css';

function App(props) {

  return (
    <Wrapper>
    <div className="App">
      <Counter></Counter>
    </div>
    </Wrapper>
  );
}

export default App;
