import React from "react";
import Hello from "./hello";
import Wrapper from "./wrapper"
import './App.css';

function App() {
  return (
    <Wrapper>
    <div className="App">
      {/* isSpecial 값에 아무것도 넣어주지 않으면 true입니당*/}
      <Hello name='react' color='red' isSpecial={true}></Hello>
      <Hello color='aqua'></Hello>
    </div>
    </Wrapper>
  );
}

export default App;
