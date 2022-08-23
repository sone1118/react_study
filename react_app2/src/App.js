import React from "react";
//import Hello from "./hello";
import Wrapper from "./wrapper"
//import Counter from "./Counter";
//import InputSample from "./InputSample";
import UserList from "./UserList";
import './App.css';

function App(props) {

  return (
    <Wrapper>
    <div>
      <UserList />
    </div>
    </Wrapper>
  );
}

export default App;
