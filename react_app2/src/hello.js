import React from 'react';

//비구조 할당 가능
//객체를 객체내부 이름이랑 똑같은 거로 가져오니까
//function Hello(props) 말고

//조건부 렌더링 isSpecial
//내용이 달라져야 할때 많이 사용한다.
function Hello({color, name, isSpecial}) {
    return (<div style={{
        color
        }}>
            {isSpecial ? <b>스페셜하다</b> : <b>스페셜하지않다.</b>}
            {/*보통 내용이 아애 달라져야 할때는 삼항연산자
            내용을 추가할때 는 &&를 많이 쓴다고 합니다*/}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

//props의 default값을 설정해 둘수 있다
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;