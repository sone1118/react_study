import React from 'react';
import styled, { css } from 'styled-components';

//div tag에다 특정 스타일을 적용한다
//템플리터럴은 안에 ${} 쓸수가 없어 그냥 템플리터럴이지
//태그 템프리터럴이 아니기 때문 => css를 추가해줘야한다.
//=css`블라블라`
//import styled, { css } from 'styled-components';
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}
`;

function App() {
  return (
    <div>
      <Circle color="pink" huge size="20rem" />
      <Circle color="green" />
    </div>
  );
}

export default App;
