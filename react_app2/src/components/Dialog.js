import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button2 from './Button2';
//keyframes를 사용해서 애니메이션 효과를 주자

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;

const slidUp = keyframes`
from {
    transform: translateY(200px);
}
to {
    transform: translateY(0px);
}
`;

const slidDown = keyframes`
from {
    transform: translateY(0px);
}
to {
    transform: translateY(200px);
}
`;

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

  animation-duration: 0.15s;
  //처음에 빨라졌다가 느려짐
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  //마지막을 유지한다
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
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

  animation-duration: 0.15s;
  //처음에 빨라졌다가 느려짐
  animation-timing-function: ease-out;
  animation-name: ${slidUp};
  //마지막을 유지한다
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slidDown};
    `}
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
  //지금애니매이션을 보여주고 있다.
  const [animate, setAnimate] = useState(false);

  //현재 상태가 true에서 false로 전환되고 있다
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    //그냥 visible값만 사용하게된다면 useEffect특성상
    //맨처음 visible값이 false일때도 실행 되버림 그럼 안됨.

    //visible true => false
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 150);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
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
