import React from 'react';
import Button from './components/Button';
import './App.scss';

function App(props) {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        {/*props 이름만 넣으면 true로 인식*/}
        <Button color="blue" size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="pink" size="small" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        {/*props 이름만 넣으면 true로 인식*/}
        <Button color="blue" size="large" fullWidth>
          BUTTON
        </Button>
        <Button color="gray" fullWidth>
          BUTTON
        </Button>
        <Button color="pink" size="large" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
