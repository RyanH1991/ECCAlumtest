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
            let facebook_url = null;
            if (user.facebook_url) {
                facebook_url = <a href={"https://" + user.facebook_url} target="_blank" rel="noopener noreferrer">
                    <img src={window.facebookIcon} className="social-icon" alt="" />
                </a>
            }
            return  <div className='user' key={user.id}>
                        <div>
                            {user.first_name}
                        </div>
                        <div>
                            {user.last_name}
                        </div>
                        <div>
                            {user.personal_email}
                        </div>
                        <div>
                            {facebook_url}
                            <a href={"https://" + user.linkedin_url} target="_blank" rel="noopener noreferrer">
                                <img src={window.linkedInIcon} className="social-icon" alt="" />
                            </a>
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