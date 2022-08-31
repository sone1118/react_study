import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

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
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성" done={true}></TodoItem>
      <TodoItem text="컴포넌트 스타일링" done={true}></TodoItem>
      <TodoItem text="context 만들기" done={true}></TodoItem>
      <TodoItem text="기능 구현하기" done={true}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
