import React from "react";

//children 이라는 객체로
//<Wrapper>여기에 있는 값을 받아올 수 있다.</Wrapper>
function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return (
        <div style={style}>{children}</div>
    );
}

export default Wrapper;