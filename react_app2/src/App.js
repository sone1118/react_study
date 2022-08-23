import React from "react";
import Hello from "./hello";
import './App.css';

function App() {
  const name = 'react';
  //스타일을 넣어줄때에는 객체로 넣어줘야한다
  //background-color => backgroundColor와 같이 변환해서 넣어준다
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <div className="App">
      <Hello></Hello>
      {/*jsx에서 js를 사용할때는 {} 를 사용한다
      class 를 사용하고 싶으면 className이라는 것을 사용한다 */}
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
      <Hello></Hello>
    </div>
  );
}

export default App;
