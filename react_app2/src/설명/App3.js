import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  console.log('App');
  return (
    <div className="container">
      <h1>hello World</h1>
      <input
        type="button"
        value="delete"
        onClick={function () {
          setFuncShow(!funcShow);
        }}
      ></input>
      {funcShow ? <FuncComp /> : null}
      <ClassComp />
    </div>
  );
}

//use라는 이름이 붙은 애들은 hook임
//useState(초기값)[1] = 함수
//useState(초기값)[0]상태값  함수는 값을 바꾸는 함수임
//이 값이 변경되면서 rerendering 됨
const funcStyle = 'color:blue';

function FuncComp(props) {
  const [number, setNumber] = useState(0);
  const [_date, setDate] = useState(new Date().toString());
  const { initNumber } = props;

  //side effect 다른 effect라는 너낌
  //주 effect인 return() rendering 이런거 말고 따른 effect너낌?
  //컴포넌트 생성 완료후, update완료후
  //복수개 생성 가능

  //컴포넌트의 생성, update 완료후면 무조건 호출되는데
  //=Didmount , Didupdate
  //number값이 바꼈을때만 호출 하고 싶다
  //[]배열값을 넣어준다.
  //mount 할때 1번, clean up, didupdate 할때마다, unmount 할때1번

  //[] 빈값을 넣어주면 : Didmount 너낌 1 회만 실행됨, return 은 unmount 즉 컴포넌트가 화면에서 사라질때 총 2번만 실행됨

  //맨처음 마운트 할때, number 값이 변할때 만 실행됨
  //return 값은 clean up 할때 즉 update할때 지우고 새로 mount 할때
  useEffect(function () {
    console.log('%cfunction => useEffect number', funcStyle);
    document.title = number;
    return function () {
      console.log('%cfunction => useEffect number return', funcStyle);
    };
  }, []);

  // 맨처음 마운트 할때, _date 값이 변할 때만 실행됨
  // return 값은 clean up 할때 즉 update 할때 지우고 새로 mount 할때
  useEffect(
    function () {
      console.log('%cfunction => useEffect Date', funcStyle);
      document.title = number;
      return function () {
        console.log('%cfunction => useEffect Date return', funcStyle);
      };
    },
    [_date],
  );
  //return 값으로 unmount 일때 불러오는 너낌인데
  //새로 update 할때 기존의 것을 clean up 하고 새로 불러와야하니까
  // 그때도 호출 된다.

  console.log('%cfunction => render', funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

//state 를 setState를 통해 값을 변경해주면
//render함수가 호출된다.
const classStyle = 'color:red';

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  constructor(props) {
    super(props);
    console.log('%cclass => constructor', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => didMount', classStyle);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('%cclass => getDerivedStateFromProps ', classStyle);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => compnentDidUpdate', classStyle);
  }
  componentWillUnmount() {
    console.log('%cclass => compnentWillUnmount', classStyle);
  }

  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
export default App;

//벨로퍼트 life cycle 한번 더 보자
/* React의 라이프 사이클

예전버전
생성시
  getDefaultProps() -> getInitialState()
  ->componentWillMount() -> render() -> componentDidMount()
  순으로 이루어진다.
  componentWillMount() : 컴포넌트 생성 바로 직전
  여기서 컴포넌트가 생성직전에 할일을
  render(): 화면에 뿌려짐 
  componentDidMount() : 컴포넌트 생성 완료

업데이트시
  getDerivedStateFromProps -> shouldComponentUpdate -> componentUpdate
  getDerivedStateFromProps: 컴포넌트의 props나 state가 바뀌었을때 호출
  shouldComponentUpdate: 컴포넌트가 rendering 할지말지 결정
  componentUpdate: 컴포넌트가 update가 된 후에 발생



최근 버전같아
class 마운트
  constructor getDerivedStateFromProps render componentDidMount 순

업데이트
  getDerivedStateFromProps shouldComponentUpdate render getSnapshotBeforeUpdate componentDidUpdate 순

unmount시
  componentWillUnMount


  function 마운트
  
  업데이트 
  useEffect 사용

  unmount
  useEffect의 return 값 사용

*/
