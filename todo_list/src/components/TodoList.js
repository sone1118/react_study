import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  //TodoTemplate에서 display: flex; 해놨기 때문에 1이면
  //자신이 차지할 수 있는 모든 영역을 차지
  flex: 1;
  padding: 20px 20px;
  padding-bottom: 48px;
  //스크롤바
  overflow-y: auto;
  //잘 적용됐는지 확인용
  //background: gray;
`;

function TodoList() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
