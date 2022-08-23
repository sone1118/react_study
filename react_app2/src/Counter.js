import React, {useState} from "react";

function Counter() {
    //useState는 값이 바뀔때마다 component가 rerendering된다.
    // useState(0)는 배열을 리턴하는데 초기값이 0인것
    // useState(0)의[0]이 number
    // useState(0)의 [1]이 setNumber이다
    // 이거를 비구조 할당으로 바로 넣어서 사용한것
    const [number, setNumber] = useState(4);
    const onIncrease = () => {
        //setNumber를 통해 number값을 수정하는 함수
        //안에 어떻게 업데이트를 할것이다 라는 함수를 넣어 줄 수도 있다.
        //=함수형 업데이트
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number => number - 2);
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