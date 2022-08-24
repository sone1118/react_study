import React, { useState } from "react";
import './App.css'

//App.js에 붙여넣기 해서 돌리면 돌아갑니다
function App() {
  console.log('App');
  return (
    <div className="container">
      <h1>hello World</h1>
      <FuncComp />
      <ClassComp />
    </div>
  );
}

//use라는 이름이 붙은 애들은 hook임
//useState(초기값)[1] = 함수
//useState(초기값)[0]상태값  함수는 값을 바꾸는 함수임
//이 값이 변경되면서 rerendering 됨
function FuncComp(props) {
  console.log('FuncComp');
  const [number, setNumber] = useState(0);
  const [_date, setDate] = useState((new Date()).toString());
  const { initNumber } = props;
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
        setDate((new Date()).toString());
      }}
      ></input>
    </div>
  );
}

//state 를 setState를 통해 값을 변경해주면
//render함수가 호출된다.
const classStyle = 'color:red';

class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  constructor(props) {
    super(props);
    console.log('%cclass => constructor', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => didMount', classStyle)
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
        onClick={function() {
          this.setState({number: Math.random()})
          }.bind(this)
        }></input>
        <input
        type="button"
        value="date"
        onClick={function() {
          this.setState({date: (new Date()).toString()})
        }.bind(this)
        }></input>
      </div>
    )
  }
}
export default App;



//벨로퍼트 life cycle 한번 더 보자
/* React의 라이프 사이클

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


class 마운트
  constructor getDerivedStateFromProps render componentDidMount 순

업데이트
  getDerivedStateFromProps shouldComponentUpdate render getSnapshotBeforeUpdate componentDidUpdate 순

*/