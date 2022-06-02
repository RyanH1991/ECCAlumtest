import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SearchPage = (props) => {
    const { searchTerm } = useParams();

    useEffect(() => {
        props.searchUsers(searchTerm.split('+'))
    }, [searchTerm])

    // console.log(`searchTerm = ${searchTerm}`)
    const users = props.users.map((user, idx) => {
        let first_name, last_name, industry
        if (searchTerm.split('+').length === 1) { //I know that I'm looking at a fragment
            if (user.first_name.indexOf(searchTerm) === 0) {
                let remainingFrag = user.first_name.slice(searchTerm.length)
                first_name = <div className='name'>
                                <b className='bolded-word'>{searchTerm[0].toUpperCase() + searchTerm.slice(1)}</b>
                                <div>{remainingFrag}</div>
                             </div>
            } else {
                first_name = <div className='name'>
                                {user.first_name[0].toUpperCase() + user.first_name.slice(1)}
                             </div>
            }
            if (user.last_name.indexOf(searchTerm) === 0) {
                let remainingFrag = user.last_name.slice(searchTerm.length)
                last_name = <div className='name'>
                                <b className='bolded-word'>{searchTerm[0].toUpperCase() + searchTerm.slice(1)}</b>
                                <div>{remainingFrag}</div>
                            </div>
            } else {
                last_name = <div className='name'>
                                {user.last_name[0].toUpperCase() + user.last_name.slice(1)}
                            </div>
            }
            if (user.industry) {
                if (user.industry.indexOf(searchTerm) === 0) {
                    let remainingFrag = user.industry.slice(searchTerm.length)
                    industry = <div className='industry-name-parts'>
                                    <b className='bolded-word'>{searchTerm[0].toUpperCase() + searchTerm.slice(1)}</b>
                                    <div className='industry-remaining-frag'>{remainingFrag}</div>
                                </div>
                } else {
                    industry = <div className='industry-name'>
                                    {user.industry[0].toUpperCase() + user.industry.slice(1)}
                                </div>
                }
            }
        } else {
            first_name = <div className='name'>{user.first_name[0].toUpperCase() + user.first_name.slice(1)}</div>
            last_name = <div className='name'>{user.last_name[0].toUpperCase() + user.last_name.slice(1)}</div>
            let industryName;
            if (user.industry) {
                industryName = user.industry[0].toUpperCase() + user.industry.slice(1)
            }
            industry = <div className='industry-name'>{industryName}</div>
        }
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
            if (JSON.parse(user.emails).length) {
                email = <div className='email-social-icon'>
                    <img src={window.emailIcon} className="email-social-icon" alt="" />
                </div>
            }

            let phone_numbers = null;
            if (user.phone_numbers) {
                phone_numbers = <div className='phone-social-icon'>
                    <img src={window.phoneIcon} className="phone-social-icon" alt="" />
                </div>
            }
            return  <div className='user' key={idx}>
                        <div className='user-icon-container'>
                            <img src={window.userIcon} className="user-icon" alt="" />
                            {industry}
                        </div>
                        <div className='full-name'>
                            {first_name}
                            {last_name}
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

    return <div className='search-page-container'>
        { users }
    </div>
}

export default SearchPage