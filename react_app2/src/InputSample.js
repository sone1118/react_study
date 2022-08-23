import React, {useState, useRef} from "react";

//돔에 직접 접근하는 방법  = useRef사용하기
//react자체 기능으로는 우리가 만들어논 초기화버튼을 누루고 커서를 옮길 수없다
// = 직접 돔에 접근해야한다
// =useRef사용
function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        //꼭 객체값을 복사한후에 사용해야합니다
        //객체의 불변성을 지킨다.
        //inputs[name]을 직접 바꾼다면 아무것도 일어나지않는다.
        const { name, value } = e.target;
        /*
        const nextInputs = {
            ...inputs,
            [name]: value
        }
        //nextInputs[name] = value;
        setInputs(nextInputs);
        */
       //불변성을 위해서 객체를 복제해서 값을 넣어주는 것임
       setInputs({
        ...inputs,
        [name]: value
       });
    }
    const deleteAll = () => {

        setInputs({name: '', nickname: ''});
        //nameInput.current = ref값을 같는 Dom을 가져온다.
        //input돔에 API를 사용할 수 있다.
        nameInput.current.focus();
    }
    return (
        <div>
            <input 
            name='name' 
            placeholder="이름"
            onChange={onChange} 
            value={name}
            ref={nameInput}
            />
            <input 
            name='nickname' 
            placeholder="닉네임"
            onChange={onChange} 
            value={nickname}
            />
            <button onClick={deleteAll}>초기화</button>
            <div>
                <b>값: </b>
                {name}{nickname}
            </div>
        </div>
    );
}

export default InputSample;