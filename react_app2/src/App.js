import React, { useRef, useState } from "react";
//import Hello from "./hello";
import Wrapper from "./wrapper"
//import Counter from "./Counter";
//import InputSample from "./InputSample";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import './App.css';

function App(props) {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(name, value);
  }
  const [ users, setUsers ] = useState([
    {
        id: 1,
        username: 'Jenos',
        email: 'jenos1118@naver.com',
        active: true,
    },
    {
        id: 2,
        username: 'Sone',
        email: 'sone1118@gmail.com',
        active: false,
    },
    {
        id: 3,
        username: 'Hyejin',
        email: 'hyejin1118@github',
        active: false,
    }
]);

//useRef는 값이 바껴도 component가 reredering 되지 않는다.
//돔선택으로도 쓸수 있지만
//특정 값을 기억하게 하고 싶을때 
//component가 rerendering되도 계속 기억되게 하고 싶을때 사용한다.

//초기값을 4로 설정
const nextId = useRef(4);

const onCreate = () => {
  //console.log(nextId.current);
  nextId.current += 1;

  //배열의 불변성을 유지하면서 요소를 추가해야한다
  //spread연산자 사용
  // const user = {id: nextId.current, username, email,};
  // setUsers([...users, user]);

  //concat함수 사용
  // const user = users.concat({
  //   id: nextId.current,
  //   username,
  //   email,
  // });
  // setUsers(user);

  const user = {id: nextId.current, username, email};
  setUsers(users.concat(user));

  setInputs({
    username: '',
    email: '',
  });
}

// const onRemove = (e) => {
//   const id = Number(e.target.value);
//   setUsers(users.filter(user => user.id !== id));
//   console.log(users);
// }

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
}

const onToggle = id => {
  //불변성을 위해서 복제후에 넣어줘야해!
  setUsers(users.map(user => 
    user.id === id ? 
    {...user, active: !user.active} : {...user}
  ))
}

  return (
    <Wrapper>
    <div>
      <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
      />
      <UserList 
      users={users} 
      onRemove={onRemove} 
      onToggle={onToggle}
      />
    </div>
    </Wrapper>
  );
}

export default App;
