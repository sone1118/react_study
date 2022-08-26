import React, { createContext, useContext, useState } from 'react';
//컴포넌트에서 프롶스를 전달받아서 일을 진행할때
//이것을 또 컴포넌트로 주고 또 주고 를 반복하면 나중에 복잡해서
//이것을 a -> b -> c -> d 가아니라 a -> d를 하자
//const MyContext = createContext('defaultValue'); 초기화
//<MyContext.Provider value="Wow"> value를 통해 값을 설정
//이것을 여기다 만들어 두고 다른데서 불러와서 쓸수 도 있고 그럼

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  const [comment, setComment] = useState('');

  const onChange = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };
  return (
    <div>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={onChange}
      ></input>
      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        Click{' '}
      </button>
      <MyContext.Provider value={value ? 'good' : 'bad'}>
        <GrandParent />
      </MyContext.Provider>
      <MyContext.Provider value={comment}>
        <GrandParent />
      </MyContext.Provider>
    </div>
  );
}

export default ContextSample;
