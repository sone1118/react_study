import React, { useEffect } from "react";
//Hook 함수 (useEffect, useMemo, useCallback)

/*
useEffect Hook
처음 화면에 나타날때, 화면에서 사라지게 될때
컴포넌트의 props나 상태가 update될때, 되기 전에
컴포넌트가 mount 또는 unmount될때 (나타날때, 삭제될때)
rerendering될때마다
특정한 것을 실행 시킴

실제로 사용할때는
보통 웹에서 페이지를 이동? 할때
url 맨뒤에 이름이 바뀌잖아. http~~~/clip 같이
이 정보가 바뀌면 Post를 불러온다 같이 사용할때 쓴다고함
    
useEffect(() => {
    loadPost(username, urlSlug);
}, [username, urlSlug]);

뭐 요런 너낌?
*/

/*
useMemo
성능을 최적화 할때 사용
특정한 값이 바뀌었을때만 함수를 실행한다. App.js에 예제 있음
*/

/*
useCallback
함수를 새로 만들지 않고 재사용할때
특정한 값이 바꼈을 경우에만 새로 만들어서 사용
그렇지 않을 경우에는 기존의 함수를 재사용
[]에 그 함수 안에서 사용한 props, state 들이 있으면 꼭 배열에 넣어줘야한다
안넣어주면 최신상태를 보고 확인 하는 것이 아니라 예전 상태를 보고
참조하게 되기때문에 의도지않은 상황을 발생 시킬 수 있따.
useMemo와 비슷 App.js에 예제 있음
 */


function User({user, onRemove, onToggle}) {
    const { id, username, email, active} = user;

    /*
    //useEffect(()=>{},[]) []은 depencylist인데
    //이 값이 change될때만 일어난다.
    //[] 비어있으면
    // 컴포넌트가 처음 실행될때, 컴포넌트가 사라지기 직전에 호출

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타난다.');
        //props값을 state로 넣어줄때
        //REST API
        //D3 Video.js 같은것을 준비
        //setInterval, setTimeout
        //이미 DOM 이만들어진 상태라 DOM관련한 것도 해도됨

        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
        //뒷정리 함수
        //업데이트 바로 직전에 호출
        //컴포넌트가 사라질때 호출된다
        //clearInterval, clearTimeout
        // 라이브러리 인스턴스 제거 (video 같은거)
    }, []);
*/
    //useEffect 내부에서 사용할 props 값이나 state 값이 있다면
    // 2번째 인자 배열로 넣어주는 것이 
    // 최신의 값을 가르키게 하는 것이라 꼭 넣어주도록 하자.
    // 2번째 값이 들어 있다면
    // 컴포넌트가 생성될때, 업데이트 되면 실행
    // 컴포넌트가 사라질때, 업데이트 되기 직전에 실행

/*
    useEffect(() => {
        console.log('user 값이 설정된다');
        console.log(user);

        //업데이트 바로 직전에 호출 뒷정리함수
        return () => {
            console.log('user값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);
*/

    return(
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer',
            }}
            onClick={() => onToggle(id)}>
                {username}
                </b> 
                &nbsp;
                <span> {email}</span>
            {/*
            () => onRemove(id)이렇게 안하고 바로
            onRemove(id)이렇게 해버리면
            호출하는 동시에 실행 되는거라 안됨
            */}
            <button onClick={() => onRemove(id)}>삭제</button>
            {/*<button value={id} onClick={onRemove}>삭제</button> */}
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    
    return(
        <div>
            {
                //User 함수에 대해 구분할 수 있는 key값이 있어야해
                //여기서는 id값을 따로 주었기 때문에 상관없는데 
                //만약 서로 구분되는 값이 없다면
                //map(user, index) 해서 이 index값을 줘도 된다. 하지만 이것은 피해주어야 한다.
                //why?
                //만약key를 index로 준다면 배열을 관리하고 rendering 할때
                //새로운것이 추가, 삭제 된다면 배열이 다 밀려 = 비효율적

                //key 값이 있어야 이것이 어떤 ele를 가르키는지 알 수 있기 때문에 반드시 있어야 좋다
                //key값이 있다면 무엇이 renderign 되어야 하는지 알 수 있기때문에 따로 배열이 밀리거나 새로 정의될 필요가 없다.

                users.map(
                    user => (<User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle} 
                        />)
                )
            }
        </div>
    );
}

export default UserList;