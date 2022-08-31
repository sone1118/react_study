import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  //done 값이 true면 css 실행
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  opacity: 0;
  //가운데 정렬
  display: flex;
  //세로축에서 가운데부터 아이템들이 생김
  align-items: center;
  //가로축에서 가운테부터 아이템들이 생김
  justify-content: center;
  color: #ced4da;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    //이렇게 값을 불러오면 나중에 이 자리에
    //Remove를 사용한 것의 className이 오게됨
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete></MdDelete>
      </Remove>
    </TodoItemBlock>
  );
}

//이렇게 함으로써props를 변경하지 않으면 rerenderng 되지 않아
//dispatch만 가져와서 사용함으로써 가능하게 됨
export default React.memo(TodoItem);
