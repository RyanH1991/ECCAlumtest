import React from 'react';
import { trieFirstNames, trieLastNames, trieIndustries } from '../../util/util_functions'

let trieObj = require('../../util/trieObj.json');

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.searchUsers(this.state.searchTerm.toLowerCase())
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        let currentNodeF = trieFirstNames;
        let currentNodeL = trieLastNames;
        let currentNodeI = trieIndustries;
        for (let i = 0; i < this.state.searchTerm.length; i++) {
            let chr = this.state.searchTerm[i].toLowerCase();
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
        if (this.state.searchTerm) { //I know the user has started typing
            //I want to style each of the list of words
            if (currentNodeF) {
                let firstNamesArr = [];
                let words;
                if (currentNodeF.words.length) {
                    words = currentNodeF.words;
                } else { //handle leaf node case
                    words = [fetchWord(currentNodeF)]
                }
                words.forEach(firstName => {
                    let remainingName = firstName.slice(this.state.searchTerm.length)
                    let cappedWord = this.state.searchTerm[0].toUpperCase() + this.state.searchTerm.slice(1).toLowerCase()
                    trieObj.first_name[firstName].forEach(lastName => {
                        firstNamesArr.push(
                            <div className='search-list-item'>
                                <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                                <>&nbsp;</>
                                <div>{lastName[0].toUpperCase() + lastName.slice(1)}</div>
                            </div>
                        )
                    })
                })
                firstNames = <div className='first-names-container'>
                                <div className='search-term-title'>
                                    SEARCH BY FIRST NAME
                                </div>
                                <div className='first-names'>
                                    {firstNamesArr}
                                </div>
                            </div>
            }
            if (currentNodeL) {
                let lastNamesArr = [];
                let words;
                if (currentNodeL.words.length) {
                    words = currentNodeL.words;
                } else {
                    words = [fetchWord(currentNodeL)]
                }
                words.forEach(lastName => {
                    let remainingName = lastName.slice(this.state.searchTerm.length)
                    let cappedWord = this.state.searchTerm[0].toUpperCase() + this.state.searchTerm.slice(1).toLowerCase()
                    trieObj.last_name[lastName].forEach(firstName => {
                        lastNamesArr.push(
                            <div className='search-list-item'>
                                <div>{firstName[0].toUpperCase() + firstName.slice(1)}</div>
                                <>&nbsp;</>
                                <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                            </div>
                        )
                    })
                })
                lastNames = <div className='last-names-container'>
                                <div className='search-term-title'>
                                    SEARCH BY LAST NAME
                                </div>
                                <div className='last-names'>
                                    {lastNamesArr}
                                </div>
                            </div>
            }
            if (currentNodeI) {
                let industryNamesArr = [];
                let words;
                if (currentNodeI.words.length) {
                    words = currentNodeI.words;
                } else {
                    words = [fetchWord(currentNodeI)]
                }
                words.forEach(industryName => {
                    let remainingName = industryName.slice(this.state.searchTerm.length)
                    let innerIndustryNames = []
                    let cappedWord = this.state.searchTerm[0].toUpperCase() + this.state.searchTerm.slice(1).toLowerCase()
                    trieObj.industry[industryName].forEach(fullName => {
                        let cappedName = fullName.split(' ').map(ele => ele[0].toUpperCase() + ele.slice(1)).join(' ')
                        innerIndustryNames.push(<button className='search-list-item'>{cappedName}</button>)
                    })
                    industryNamesArr.push(
                        <div className='search-industry-name-container'>
                            <button className='search-industry-name'
                                    value={cappedWord}
                                    >
                                <div className='bold-frag'>{cappedWord}</div><div>{remainingName}</div>
                            </button>
                            <div className='inner-industry-names'>
                                {innerIndustryNames}
                            </div>
                        </div>
                    )
                })
                industryNames = <div className='industry-names-container'>
                                    <div className='search-term-title'>
                                        INDUSTRY
                                    </div>
                                    <div className='industry-names'>
                                        {industryNamesArr}
                                    </div>
                                </div>
            }
        }
        return (
            <form onSubmit={this.handleSubmit}
                  className='search-outer-container'>
                <div className='search-container-title'>Find Alumni</div>
                <div className='search-inner-container'>
                    <input type="text" 
                           className="search-text-box"
                           value={this.state.searchTerm}
                           onChange={this.handleChange}
                           placeholder="First name, Last name, or Industry"
                           />
                    <div className='search-dropdown'>
                        {firstNames}
                        {lastNames}
                        {industryNames}
                    </div>
                </div>
                <button className="search-submit">Let's go</button>
            </form>
        )
    }
}

export default Search;