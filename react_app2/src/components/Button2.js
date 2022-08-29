import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
//sass에서는 darken lighten 같은 함수를 사용할 수 있는데
//styled components에서 그런 함수를 사용하려면
//polished라는 lib을 설치해야함

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};

          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

//반복되는 코드가 너무 많아 refactoring 하자
// const sizeStyles = css`
//   ${(props) =>
//     props.size === 'large' &&
//     css`
//       height: 3rem;
//       font-size: 1.25rem;
//     `}

//   ${(props) =>
//     props.size === 'medium' &&
//     css`
//       height: 2.25rem;
//       font-size: 1rem;
//     `}

//     ${(props) =>
//     props.size === 'small' &&
//     css`
//       height: 1.75rem;
//       font-size: 0.875rem;
//     `}
// `;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}
  /* 생상 */
  //ThemeProvider을 통해서 App.js에 선언된 색 객체를
  //props의 theme으로 받아와서 사용

  //하나로 묶어서 작성하는 방법
  //함수를 밖으로 빼서 정의할 수도 있음
  ${colorStyles}

  //다 따로따로 작성
  /* background: ${(props) => props.theme.palette.blue};

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${(props) => darken(0.1, props.theme.palette.blue)};
  } */

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  //스타일을 덮어 써야하기 때문에 맨 아래 적어줌
  ${fullWidthStyle}
`;

function Button2({ children, color, size, fullWidth, outline, ...rest }) {
  return (
    <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  );
}

Button2.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button2;
