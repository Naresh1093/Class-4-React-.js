import React from 'react';
import UserItem from './UserItem';

function User(props) {
    return (
        <div className="row">
            {
                props.usersList.map((item,index) => {
                    return (
                        <UserItem key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

export default User;