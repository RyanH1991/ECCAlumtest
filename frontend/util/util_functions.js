
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

export const fetchWord = (currentNode) => {
    let nodeCheck = currentNode;
    let word = '';
    while(nodeCheck.parent !== null) {
        word = nodeCheck.ch + word;
        nodeCheck = nodeCheck.parent;
    }
    
    return word;
}

let trieObj = require('./trieObj.json');

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

export { trieFirstNames, trieLastNames, trieIndustries };