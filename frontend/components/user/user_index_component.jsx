import React, { useEffect } from 'react';

const UserIndex = (props) => {

    useEffect(() => {
        props.fetchUsers()
    }, [])

    const users = props.users.map((user, idx) => {
        let first_name, middle_name, last_name;
        if (user.first_name && user.first_name.length) {
            first_name = user.first_name[0].toUpperCase() + user.first_name.slice(1).toLowerCase();
        }
        if (user.last_name && user.last_name.length) {
            last_name = user.last_name[0].toUpperCase() + user.last_name.slice(1).toLowerCase();
        }
        if (user.middle_name && user.middle_name.length) {
            middle_name = user.middle_name[0].toUpperCase() + user.middle_name.slice(1).toLowerCase();
        } else if (user.middle_inital && user.middle_inital.length) {
            middle_name = user.middle_inital.toUpperCase()
        }
        return  <div className='user-index-item-container'
                     key={idx}>
                    <div className='user-index-item'>{first_name}</div>
                    <div className='user-index-item'>{middle_name}</div>
                    <div className='user-index-item'>{last_name}</div>
                </div> 
    })

    return  <div className='user-index-container'>
                <div className='user-index-inner-container'>
                    {users}
                </div>
            </div>
}

export default UserIndex