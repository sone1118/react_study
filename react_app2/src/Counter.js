import React, { Component, useReducer } from "react";

//상태 업데이트 로직을 함수 밖으로 빼서 만들어주자
// =useReducer 로 가능
//recuder함수는 밖으로 빼서 만들어 줄 수 있다.
//action에 따라 state값을 return 해 주어야 한다.
//state 값은 객체던 배열이던 아무거나 될 수있다
//action 은 {type: 'INCREMENT'} {type: 'DECREMENT'} 등으로 해주는데
//이름은 직접 설정 가능하다.
//action이 무엇이냐 에 따라서 업데이트를 해준다.
// function reducer(state, action) {
//     console.log('reducer');
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         case 'DECREMENT2':
//             return state - 2;
//         default:
//             throw new Error('Unhanded action');
//             //return state;

//     }
// }



// function Counter() {
//     console.log('counter');
//     //현재의 상태 number, 보내다: 액션을 발생시킨다 dispatch
//     //useReducer(reducer함수, 초기값);
//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT'
//         });
//     }
//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT2'
//         });
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onDecrease}>-2</button>
//             <button onClick={onIncrease}>+1</button>
//         </div>
//     );
// }


//class형으로 만들어보자
class Counter extends Component {

    constructor(props) {
        super(props);
        //이 함수 내에서 this를 사용 하기 위해서 bind해줌
        //이게 일반적인 방법
        //아니면 그냥 함수를 에로우 함수로 써서 this걍 쓰면됨
        this.handleDecrease = this.handleDecrease.bind(this);
        // this.handleIncrease = this.handleIncrease.bind(this);

        //state는 무조건 객체 형태여야 한다.
        this.state = {
            counter: 0,
            fixted: 1,
            updateMe: {
                toggleMe: false,
                dontChangeMe: 1
            }
        }
    }

    //state설정은 이렇게 해줘 도 됨
    //정식 js 문법은 아니지만
    //class properties 라고 해서 바벨플로그인을 통해서 사용할 수 있는 문법이다
    //create-react-app 에서는 자동으로 문법이 적용되어 있어서 사용 할 수 있다.

    // state = {
    //     counter: 0
    // }


    handleIncrease= () => {
        console.log(this);
        console.log('increase');
        
        //변경할 값만 넣어주면 해당값만 업데이트 하고
        //나머지 값은 그대로 놔둔다.
        this.setState({
            counter: this.state.counter + 1
        });

        //setState도 함수형 업데이트가 가능하다
        //함수 형은 바로 업데이트가 되지만
        //3번 호출하면 +3됨
        //그냥 객체로 넣는 것은 바로 업데이트가 되지 않아
        //3번 호출해도 +1만됨
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }
    
    handleDecrease() {
        console.log(this);
        console.log('decrease');
        this.setState({
            counter: this.state.counter - 1
        });
    }

    //최상위 state 값들은 따로 안넣어 줘도 변경이 없으면 유지가 되지만
    // 그 안에 객체가 있고 그것을 변경한다면 다 넣어줘야함.
    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe,
            }
        });
    }

    render() {
        return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleDecrease}>-1</button>
            <button onClick={this.handleIncrease}>+1</button>
        </div>
        )
    }
}

export default Counter;