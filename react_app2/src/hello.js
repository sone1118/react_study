import React from 'react';

//비구조 할당 가능
//객체를 객체내부 이름이랑 똑같은 거로 가져오니까
//function Hello(props) 말고
function Hello({color, name}) {
    return <div style={{
        color
    }}>안녕하세요 {name}</div>
}

//props의 default값을 설정해 둘수 있다
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;