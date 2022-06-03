import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';

const UserIndex = (props) => {

    useEffect(() => {
        props.fetchUsers()
    }, []);

    const users = props.users.map((user, idx) => {
        let first_name, middle_name, last_name, industry;

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
        if (user.industry) {
            industry = user.industry[0].toUpperCase() + user.industry.slice(1).toLowerCase()
        }

        let facebook_url, linkedin_url;

        if (user.facebook_url) {
            facebook_url = user.facebook_url
        }
        if (user.linkedin_url) {
            linkedin_url = user.linkedin_url
        }

        let phone_numbers = JSON.parse(user.phone_numbers);
        let phone_numbers_div;
        let dropdownPhoneArrow
        if (phone_numbers.length > 1) {
            dropdownPhoneArrow = <img src={window.dropdownIcon} 
                                alt="|" 
                                className='drowdown-arrow'/>
        }
        console.log(dropdownPhoneArrow)
        if (phone_numbers.length) {
            const defaultOption = phone_numbers[0]
            phone_numbers_div = <Dropdown options={phone_numbers.slice(1)} 
                                          value={defaultOption} 
                                          placeholder="Select an option"
                                          arrowOpen={dropdownPhoneArrow}
                                          arrowClosed={dropdownPhoneArrow}/>;
        }

        let emails = JSON.parse(user.emails);
        let emails_div;
        let dropdownEmailArrow
        if (emails.length > 1) {
            dropdownEmailArrow = <img src={window.dropdownArrow} 
                                alt="|" 
                                className='drowdown-arrow'/>
        }
        if (emails.length) {
            const defaultOption = emails[0]['address']
            emails = emails.map(e => e['address']).slice(1)
            emails_div = <Dropdown options={emails} 
                                          value={defaultOption} 
                                          placeholder="Select an option"/>;
        }

        return  <div className='user-index-item-container'
                     key={idx}>
                    <div className='user-index-item'>{first_name}</div>
                    <div className='user-index-item'>{middle_name}</div>
                    <div className='user-index-item'>{last_name}</div>
                    <div className='user-index-item'>{industry}</div>
                    <div className='user-index-item-dropdown'>{phone_numbers_div}</div>
                    <div className='user-index-item-dropdown'>{emails_div}</div>
                    <a href={"https://" + linkedin_url}
                                  className="user-index-item"
                                  target="_blank" 
                                  rel="noopener noreferrer">{linkedin_url}</a>
                    <a href={"https://" + facebook_url}
                                  className="user-index-item"
                                  target="_blank" 
                                  rel="noopener noreferrer">{facebook_url}</a>
                </div> 
    })

    return  <div className='user-index-container'>
                <div className='user-index-inner-container'>
                    <div className='column-title-container'>
                        <div className="column-title-item">First Name</div>
                        <div className="column-title-item">Middle Name</div>
                        <div className="column-title-item">Last Name</div>
                        <div className="column-title-item">Industry</div>
                        <div className="column-title-item">Phone Number</div>
                        <div className="column-title-item">Email</div>
                        <div className="column-title-item">LinkedIn</div>
                        <div className="column-title-item">Facebook</div>
                    </div>
                    {users}
                </div>
            </div>
}

export default UserIndex