import React from 'react';

class UserIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log('you clicked it!')
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
                email = <button className='email-social-icon'
                                onClick={this.handleClick}>
                    <img src={window.emailIcon} className="email-social-icon" alt="" />
                </button>
            }

            let phone_numbers = null;
            if (user.phone_numbers) {
                phone_numbers = <div className='phone-social-icon'>
                    <img src={window.phoneIcon} className="phone-social-icon" alt="" />
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
                            {phone_numbers}
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