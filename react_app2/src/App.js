import React from "react";
//import Hello from "./hello";
import Wrapper from "./wrapper"
//import Counter from "./Counter";
import InputSample from "./InputSample";
import './App.css';

function App(props) {

  return (
    <Wrapper>
    <div className="App">
      <InputSample></InputSample>
    </div>
    </Wrapper>
  );
}

export default App;
