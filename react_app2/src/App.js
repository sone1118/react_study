import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './components/Dialog';
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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('confirm');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('cancel');
    setDialog(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <Button2 color="pink" size="large" onClick={onClick}>
            삭제
          </Button2>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="확인"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제하시겠습니까?{' '}
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
