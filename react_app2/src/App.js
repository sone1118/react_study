import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button2 from './components/Button2';
//ThemeProvider을 통해서 App.js에서 색을 선언해두고
//이를 Button2.js에서 받아서 사용해보자

const AppBlock = styled.div`
  width: 512px;
  /* 가운데 정렬 */
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#ced4da',
  pink: '#faa2c1',
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button2>Button</Button2>
          <Button2 color="pink">Button</Button2>
          <Button2 color="gray">Button</Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 size="large">Button</Button2>
          <Button2 color="pink">Button</Button2>
          <Button2 size="small" color="gray">
            Button
          </Button2>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
