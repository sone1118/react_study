import React from 'react';
import './Button.scss';
import classNames from 'classnames';

//size: larger, default: medium, small
//color: defalut: blue, pink, gray
//outline: true, false
//fullWidth: true, false
//classNames 라이브러리를 써줬기 때문에 || 연산 필요없이
//false라면 값이 들어가지 않아
function Button({ children, size, color, outline, fullWidth }) {
  //className={`Button ${size}`}
  //className={['Button', size].join(' ')}
  return (
    <button
      className={classNames('Button', size, color, {
        outline,
        fullWidth,
      })}
    >
      {children}
    </button>
  );
}

//default값을 설정할때는 위에서
//function Button({ children, size = 'medium' }) 도 가능
//classNames('Button', size || 'medium') 도가능하지만 이건잘..

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;

//동시에 className에 여러개의 값을 조건부로 받아오기 위해서 사용하는 라이브러리를 쓸것 => classnames 라이브러리
/*
classNames('foo', 'bar') = 'foo bar'
classNames('foo', {bar: ture}) = 'foo bar'
classNames({'foo-bar': true}}) = 'foo-bar'
classNames({foo: true}, {bar: true}) = 'foo bar'
classNames(['foo', 'bar']) = 'foo bar'

동시에 여러개의 타입으로도 받아 올 수 있다.
classNames({foo: true}, 'bar', 'hi') = 'foo bar hi'
false, null, 0, undefined는 무시
*/
