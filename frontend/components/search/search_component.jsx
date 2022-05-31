import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { trieFirstNames, trieLastNames, trieIndustries, fetchWord } from '../../util/util_functions';

const trieObj = require('../../util/trieObj.json');

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [keyWord, setKeyWord] = useState(null);
    const navigate = useNavigate();

    function buildFirstNamesDropdown(currentNodeF) {
        let firstNamesArr = [];
        let words;
        if (currentNodeF.words.length) {
            words = currentNodeF.words;
        } else { //handle leaf node case
            words = [fetchWord(currentNodeF)]
        }
        let key_i = 0;
        words.forEach(firstName => {
            let remainingName = firstName.slice(searchTerm.length)
            let cappedWord = searchTerm[0].toUpperCase() + searchTerm.slice(1).toLowerCase()
            trieObj.first_name[firstName].forEach(lastName => {
                firstNamesArr.push(
                    <button className='search-list-item'
                         key={`f_${key_i++}`}
                         value={`${firstName}+${lastName}`}
                         onClick={(e) => {
                            setKeyWord(e.target.value)
                        }}>
                        <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                        <>&nbsp;</>
                        <div>{lastName[0].toUpperCase() + lastName.slice(1)}</div>
                    </button>
                )
            })
        })
        return  <div className='first-names-container'
                     key='first-names-container'>
                    <div className='search-term-title'>
                        SEARCH BY FIRST NAME
                    </div>
                    <div className='first-names'>
                        {firstNamesArr}
                    </div>
                </div>
    }

    function buildLastNamesDropdown(currentNodeL) {
        let lastNamesArr = [];
        let words;
        if (currentNodeL.words.length) {
            words = currentNodeL.words;
        } else {
            words = [fetchWord(currentNodeL)]
        }
        let key_i = 0
        words.forEach(lastName => {
            let remainingName = lastName.slice(searchTerm.length)
            let cappedWord = searchTerm[0].toUpperCase() + searchTerm.slice(1).toLowerCase()
            trieObj.last_name[lastName].forEach(firstName => {
                lastNamesArr.push(
                    <button className='search-list-item'
                            key={`l_${key_i++}`}
                            value={`${firstName}+${lastName}`}
                            onClick={(e) => {
                                setKeyWord(e.target.value)
                            }}>
                        <div>{firstName[0].toUpperCase() + firstName.slice(1)}</div>
                        <>&nbsp;</>
                        <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                    </button>
                )
            })
        })
        return  <div className='last-names-container'
                     key='last-names-container'>
                    <div className='search-term-title'>
                        SEARCH BY LAST NAME
                    </div>
                    <div className='last-names'>
                        {lastNamesArr}
                    </div>
                </div>
    }

    function buildIndustriesDropdown(currentNodeI) {
        let industryNamesArr = [];
        let words;
        if (currentNodeI.words.length) {
            words = currentNodeI.words;
        } else {
            words = [fetchWord(currentNodeI)]
        }
        let key_i = 0;
        let container_key_i = 0;
        words.forEach(industryName => {
            let remainingName = industryName.slice(searchTerm.length)
            let innerIndustryNames = []
            let cappedWord = searchTerm[0].toUpperCase() + searchTerm.slice(1).toLowerCase()
            let firstName, lastName;
            trieObj.industry[industryName].forEach(fullName => {
                let fullArr = fullName.split(' ')
                firstName = fullArr[0];
                lastName = fullArr[1];
                let cappedName = fullName.split(' ').map(ele => ele[0].toUpperCase() + ele.slice(1)).join(' ')
                innerIndustryNames.push(
                    <button className='search-list-item'
                            value={`${firstName}+${lastName}+${industryName}`}
                            key={`i_${key_i++}`}
                            onClick={(e) => {
                                setKeyWord(e.target.value)
                            }}>
                        {cappedName}
                    </button>
                )
            })
            industryNamesArr.push(
                <div className='search-industry-name-container'
                     key={`cont_i_${container_key_i++}`}>
                    <button className='search-industry-name'
                            value={industryName}
                            onClick={(e) => {
                                setKeyWord(industryName)
                            }}>
                        <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                    </button>
                    <div className='inner-industry-names'>
                        {innerIndustryNames}
                    </div>
                </div>
            )
        })

        return  <div className='industry-names-container'
                     key='industry-names-container'>
                    <div className='search-term-title'>
                        INDUSTRY
                    </div>
                    <div className='industry-names'>
                        {industryNamesArr}
                    </div>
                </div>
    }

    let currentNodeF = trieFirstNames;
    let currentNodeL = trieLastNames;
    let currentNodeI = trieIndustries;
    for (let i = 0; i < searchTerm.length; i++) {
        let chr = searchTerm[i].toLowerCase();
        if (currentNodeF && currentNodeF.map[chr]) {
            currentNodeF = currentNodeF.map[chr]
        } else {
            currentNodeF = null;
        }
        if (currentNodeL && currentNodeL.map[chr]) {
            currentNodeL = currentNodeL.map[chr];
        } else {
            currentNodeL = null;
        }
        if (currentNodeI && currentNodeI.map[chr]) {
            currentNodeI = currentNodeI.map[chr];
        } else {
            currentNodeI = null;
        }
    }
    let firstNames = null;
    let lastNames = null;
    let industryNames = null;
    if (searchTerm) { //I know the user has started typing
        //I want to style each of the list of words
        if (currentNodeF) {
            firstNames = buildFirstNamesDropdown(currentNodeF)
        }
        if (currentNodeL) {
            lastNames = buildLastNamesDropdown(currentNodeL)
        }
        if (currentNodeI) {
            industryNames = buildIndustriesDropdown(currentNodeI)
        }
    }

    return  <form onSubmit={(event) => {
                event.preventDefault();
                let search;
                if (keyWord) {
                    search = keyWord;
                } else {
                    search = searchTerm;
                }
                // console.log(search)
                setKeyWord(null);
                setSearchTerm('');

                // props.searchUsers(search.split('+'))
                navigate(`/search/${search}`)
            }}
                  className='search-outer-container'>
                <div className='search-container-title'>Find Alumni</div>
                <div className='search-middle-container'>
                    <button className='search-submit'>Let's Go</button>
                    <div className='search-inner-container'>
                        <input type="text" 
                            className='search-text-box'
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}
                            placeholder="First name, Last name, or Industry"/>
                        <div className='search-dropdown'>
                            {firstNames}
                            {lastNames}
                            {industryNames}
                        </div>
                    </div>
                </div>
            </form>
}

export default Search;