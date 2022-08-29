import React from 'react';
import styled from 'styled-components';
import Button2 from './Button2';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  //우측정렬
  justify-content: flex-end;
`;

//현재 취소 확인 버튼의 사이를 줄이고 싶으면
//button2가서 고쳐도 되지만 상속받아서 여기서 고칠수 있다.
//기존에 있는 거 위에 덮어 쓰는거
//그리고 기존 Button2를 ShortMarginButton 태그로 고침
const ShortMarginButton = styled(Button2)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) {
  if (!visible) return null;

  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};
export default Dialog;
