import React from "react";

function User({user}) {
    return(
        <div>
            <b>{user.username}</b> <span> {user.email}</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'Jenos',
            email: 'jenos1118@naver.com'
        },
        {
            id: 2,
            username: 'Sone',
            email: 'sone1118@gmail.com'
        },
        {
            id: 3,
            username: 'Hyejin',
            email: 'hyejin1118@github'
        }
    ];
    
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
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;