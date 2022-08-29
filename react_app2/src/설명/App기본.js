import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from 'react';
//import Hello from "./hello";
import Wrapper from './wrapper';
import Counter from './Counter';
//import InputSample from "./InputSample";
import User2 from './User2';
import ErrorBoundary from './ErrorBoundary';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';
import './App.css';
import produce from 'immer';
//immer라고 불러와도 되지만 보통 produce 라고 불러온다고 한다.
//immer을 사용하면 불변성을 해치는 코드를 작성해도
//대신 불변성을 유지해준다.

//크롬개발자 도구에서 immer을 사용할 수 있게 해줌
//window.produce = produce;

//언제 useState? 언제 useReducer?
//useState는 관리해 줘야 할 값을 하나씩 쓰는 너낌이라면
//useReducer은 한번에 관리하면서 그 값들이
//특정 action값에 따라서 바뀌게 하는 너낌

//답은 없지만
//관리해 줘야 할 값이 별로 없다면 useState
//많이 관리해 줘야 한다면 useReducer을 쓰는 너낌
const countActiveUsers = (users) => {
  console.log('활성 사용자수 세는 중');
  return users.filter((user) => user.active).length;
};

const initialState = {
  users: [
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
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        //index부터 1개를 없애겠다.
        draft.users.splice(index, 1);
      });
    default:
      throw new Error('Unhanded action');
  }
}

export const UserDispatch = createContext(null);

function App(props) {
  console.log('app');
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [form, onChange, reset] = useInputs({
  //   username: '',
  //   email: ''
  // });
  // const { username, email } = form;
  //const nextId = useRef(4);
  const { users } = state;

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //       active: false
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
        //username={username}
        //email={email}
        //onChange={onChange}
        //onCreate={onCreate}
        />
        <UserList users={users} />
        <div>활성 사용자 수: {count}</div>
      </UserDispatch.Provider>

      {/*만약에 props를 전달해야하는데 우리의 실수로 전달하지 못했다면? 사용자는 하얀색의 빈 화면만 보게 될것
      이럴때 어떻게 해야하는가? */}
      <ErrorBoundary>
        <User2 />
        <b>User2의 에러 처리</b>
      </ErrorBoundary>
    </>
  );
}

export default App;
