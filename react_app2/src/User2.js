import React from "react";

/*만약에 props를 전달해야하는데 우리의 실수로 전달하못했다면? 사용자는 하얀색의 빈 화면만 보게 될것
이럴때 어떻게 해야하는가?
3가지 방법이 있다. 
1. 직접 if 문으로 에러 발생을 예상해서 넣어주거나
2. componentDidCatch  => class형 컴포넌트만 가능하다
: 개발자가 실수로 에러발생을 예상 못했어. 그러면 그것을 사용자에게 알리고, 모니터링도 할 수 있게 한다.
*/

function User2({ user }) {
    //1. user가 없을 경우를 작성
    //if(!user) return null;
    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    )
}

export default User2;