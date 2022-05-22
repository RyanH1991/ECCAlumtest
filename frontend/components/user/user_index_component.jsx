import React from 'react';

class UserIndex extends React.Component {
    constructor(props) {
        super(props)
        console.log('we are in the User Index')
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const users = this.props.users.map(user => {
            return  <div className='user'>
                        <div>
                            {user.first_name}
                        </div>
                        <div>
                            {user.last_name}
                        </div>
                        <div>
                            {user.personal_email}
                        </div>
                    </div>
        })
        return (
            <div>
                <h2>
                    Anything at all for now
                </h2>
                {users}
            </div>
        )
    }
}

export default UserIndex