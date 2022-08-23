import React from "react";
import Hello from "./hello";
import Wrapper from "./wrapper"
import './App.css';

function App() {
  return (
    <Wrapper>
    <div className="App">
      <Hello name='react' color='red'></Hello>
      <Hello color='aqua'></Hello>
    </div>
    </Wrapper>
  );
}

export default App;
