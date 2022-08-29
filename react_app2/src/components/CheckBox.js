import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
//module.css import
//여러 스타일을 적용해 줘야 할때 classnames를 사용하면 편하게 쓸수 있다.
//import classNames from 'classnames/bind' classnames가 아닌 /bind를 불러오기

//css module을 사용해보자
//CheckBox.module.css 형태로 파일을 만듬
//1. 래거시 프로젝트에 리액트를 도입할때
// 기준 프로젝트가 있고 일부기능에 리액트를 도입하려고 할때
//기준 프로젝트에서 사용하던 css 클래스 이름과 중복이될 수 있기 때문에 이를 방지 하기 위해서
// css module을 이용해 새로 작성한 css는 기존의 것을 건들이지 않도록 함

//2. css 클래스 네이밍 규칙 만들기 귀찮을때
// 규칙을 따르기 귀찮을 때 그냥 기존의 것들을 건드리지 않고 css를 추가할때 편리하다

//css module은 sass에서도 사용 가능
// .module.scss로 확장자만 바꾸면됨

function CheckBox({ checked, children, ...rest }) {
  return (
    //className={styles.checkbox} classname이 한개일때
    //{cx('checkbox', 'icon')} clsssname이 여러개일때
    // = 여러개의 style을 추가할때
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest}></input>
        <div className={cx('icon')}>{checked ? <MdCheckBox className={cx('checked')} /> : <MdCheckBoxOutlineBlank />}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
