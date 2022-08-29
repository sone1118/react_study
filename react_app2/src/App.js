import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import './App.scss';

function App(props) {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <CheckBox onClick={onChange} checked={check}>
        약관에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App;
