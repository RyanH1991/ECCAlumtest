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
            // console.log(user)
            let facebook_url = null;
            if (user.facebook_url) {
                facebook_url = <a href={"https://" + user.facebook_url}
                                  className="fb-social-icon"
                                  target="_blank" 
                                  rel="noopener noreferrer">
                    <img src={window.facebookIcon} className="fb-social-icon" alt="" />
                </a>
            }

            let email = null;
            if (user.personal_email.includes('@')) {
                email = <div className='email-social-icon'>
                    <img src={window.emailIcon} className="email-social-icon" alt="" />
                </div>
            }

            let phone_number = null;
            if (user.phone_number) {
                console.log(user.first_name)
                console.log(user.phone_number)
                phone_number = <div className='phone-social-icon'>
                    <img src={window.phone_number} className="phone-social-icon" alt="" />
                </div>
            }
            return  <div className='user' key={user.id}>
                        <div className='user-icon-container'>
                            <img src={window.userIcon} className="user-icon" alt="" />
                        </div>
                        <div className='full-name'>
                            <div className='name'>
                                {user.first_name}
                            </div>
                            <div className='name'>
                                {user.last_name}
                            </div>
                        </div>
                        <div className='social-icon-container'>
                            <a href={"https://" + user.linkedin_url}
                               className="social-icon"
                               target="_blank" 
                               rel="noopener noreferrer">
                                <img src={window.linkedInIcon} className="social-icon" alt="" />
                            </a>
                            {facebook_url}
                            {email}
                            <img src={window.phoneIcon} className="phone-social-icon" alt="" />
                            {/* {phone_number} */}
                        </div>
                    </div>
        })
        return (
            <div className='user-index-container'>
                {users}
            </div>
        )
    }
}

export default UserIndex