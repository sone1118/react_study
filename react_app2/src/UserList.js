import React from "react";

function User({user, onRemove, onToggle}) {
    const { id, username, email, active} = user;
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