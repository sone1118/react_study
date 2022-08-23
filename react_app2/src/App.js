import React, { useRef } from "react";
//import Hello from "./hello";
import Wrapper from "./wrapper"
//import Counter from "./Counter";
//import InputSample from "./InputSample";
import UserList from "./UserList";
import './App.css';

function App(props) {
  const users = [
    {
        id: 1,
        username: 'Jenos',
        email: 'jenos1118@naver.com'
    },
    {
        id: 2,
        username: 'Sone',
        email: 'sone1118@gmail.com'
    },
    {
        id: 3,
        username: 'Hyejin',
        email: 'hyejin1118@github'
    }
];

//useRef는 값이 바껴도 component가 reredering 되지 않는다.
//돔선택으로도 쓸수 있지만
//특정 값을 기억하게 하고 싶을때 
//component가 rerendering되도 계속 기억되게 하고 싶을때 사용한다.

//초기값을 4로 설정
const nextId = useRef(4);

const onCreate = () => {
  console.log(nextId.current);
  nextId.current += 1;
}
  return (
    <Wrapper>
    <div>
      <UserList users={users} />
    </div>
    </Wrapper>
  );
}

export default App;
