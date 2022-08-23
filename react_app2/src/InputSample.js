import React, {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
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
    }
    return (
        <div>
            <input 
            name='name' 
            onChange={onChange} 
            value={name}
            />
            <input 
            name='nickname' 
            onChange={onChange} 
            value={nickname}
            />
            <button onClick={deleteAll}>초기화</button>
            <div>
                <b>값</b>
                {name}{nickname}
            </div>
        </div>
    );
}

export default InputSample;