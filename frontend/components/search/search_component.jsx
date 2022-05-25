import React from 'react';

function trieNode(ch) {
    this.ch = ch;
    this.complete = false;
    this.map = {};
    this.parent = null;
    this.words = [];
}

function add(str, i, root) {
    if (i === str.length) {
        root.complete = true;
        return
    }

    if (!root.map[str[i]]) {
        root.map[str[i]] = new trieNode(str[i])
        root.map[str[i]].parent = root;
    }

    root.words.push(str);
    add(str, i + 1, root.map[str[i]]);
}

function search(str, i, root) {
    if (i === str.length) 
        return root.words;

    if (!root.map[str[i]])
        return [];
    
    return search(str, i+1, root.map[str[i]]);
}

function fetchWord(currentNode) {
    let nodeCheck = currentNode;
    let word = '';
    while(nodeCheck.parent !== null) {
        word = nodeCheck.ch + word;
        nodeCheck = nodeCheck.parent;
    }
    
    return word;
}

let trieObj = require('../../util/trieObj.json');

const trieFirstNames = new trieNode(null);
const trieLastNames = new trieNode(null);
const trieIndustries = new trieNode(null);

for (let key in trieObj.first_name) {
    add(key, 0, trieFirstNames)
}
for (let key in trieObj.last_name) {
    add(key, 0, trieLastNames)
}
for (let key in trieObj.industry) {
    add(key, 0, trieIndustries)
}

// console.log(trieIndustries)

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        console.log(this.state.searchTerm)
        let currentNodeF = trieFirstNames;
        let currentNodeL = trieLastNames;
        let currentNodeI = trieIndustries;
        for (let i = 0; i < this.state.searchTerm.length; i++) {
            let chr = this.state.searchTerm[i];
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
        console.log(currentNodeI)
        let firstNames = null;
        let lastNames = null;
        let industryNames = null;
        if (this.state.searchTerm) { //I know the user has started typing
            //I want to style each of the list of words
            if (currentNodeF) {
                let firstNamesArr = [];
                currentNodeF.words.forEach(firstName => {
                    let remainingName = firstName.slice(this.state.searchTerm.length)
                    trieObj.first_name[firstName].forEach(lastName => {
                        firstNamesArr.push(
                            <div className='search-full-name'>
                                <strong>{this.state.searchTerm}</strong><div>{remainingName}</div>
                                <>&nbsp;</>
                                <div>{lastName}</div>
                            </div>
                        )
                    })
                })
                firstNames = <div className='first-names-container'>
                                <div className='first-names-title'>
                                    SEARCH FIRST NAME
                                </div>
                                <div className='first-names'>
                                    {firstNamesArr}
                                </div>
                            </div>
            }
            if (currentNodeL) {
                let lastNamesArr = [];
                currentNodeL.words.forEach(lastName => {
                    let remainingName = lastName.slice(this.state.searchTerm.length)
                    trieObj.last_name[lastName].forEach(firstName => {
                        lastNamesArr.push(
                            <div className='search-full-name'>
                                <div>{firstName}</div>
                                <>&nbsp;</>
                                <strong>{this.state.searchTerm}</strong><div>{remainingName}</div>
                            </div>
                        )
                    })
                })
                lastNames = <div className='last-names-container'>
                                <div className='last-names-title'>
                                    SEARCH BY LAST NAME
                                </div>
                                <div className='last-names'>
                                    {lastNamesArr}
                                </div>
                            </div>
            }
            if (currentNodeI) {
                let industryNamesArr = [];
                currentNodeI.words.forEach(industryName => {
                    let remainingName = industryName.slice(this.state.searchTerm.length)
                    let innerIndustryNames = []
                    trieObj.industry[industryName].forEach(fullName => {
                        innerIndustryNames.push(<div>{fullName}</div>)
                    })
                    industryNamesArr.push(
                        <div>
                            <div className='search-industry-name'>
                                <strong>{this.state.searchTerm}</strong><div>{remainingName}</div>
                            </div>
                            <div className='inner-industry-names'>
                                {innerIndustryNames}
                            </div>
                        </div>
                    )
                })
                industryNames = <div className='industry-names-container'>
                                    <div className='industry-names-title'>
                                        INDUSTRY
                                    </div>
                                    <div className='industry-names'>
                                        {industryNamesArr}
                                    </div>
                                </div>
            }
        }
        return (
            <div>
                This is where the Search bar is going
                <div>
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
            </div>
        )
    }
}

export default Search;