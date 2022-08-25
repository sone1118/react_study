import React, { useReducer } from "react";

//상태 업데이트 로직을 함수 밖으로 빼서 만들어주자
// =useReducer 로 가능
//recuder함수는 밖으로 빼서 만들어 줄 수 있다.
//action에 따라 state값을 return 해 주어야 한다.
//state 값은 객체던 배열이던 아무거나 될 수있다
//action 은 {type: 'INCREMENT'} {type: 'DECREMENT'} 등으로 해주는데
//이름은 직접 설정 가능하다.
//action이 무엇이냐 에 따라서 업데이트를 해준다.
function reducer(state, action) {
    console.log('reducer');
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'DECREMENT2':
            return state - 2;
        default:
            throw new Error('Unhanded action');
            //return state;

    }
}



function Counter() {
    console.log('counter');
    //현재의 상태 number, 보내다: 액션을 발생시킨다 dispatch
    //useReducer(reducer함수, 초기값);
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        });
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT2'
        });
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-2</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    );
}

export default Counter;