module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) return false;
    const openingBrackets = [];
    const closingBrackets = [];
    bracketsConfig.forEach(item => {
        openingBrackets.push(item[0]);
        closingBrackets.push(item[1]);
    })
    const arr = str.split('');
    const saveToMatch = [];

    arr.forEach(item => {
        const correspondingBracketIndex = closingBrackets.indexOf(item); // const is ok - every  iteration of a loop has its own block scope.
        if (saveToMatch.length !== 0 && saveToMatch[0] === openingBrackets[correspondingBracketIndex]) { // this 1st to solve identical brackets  //instead if in if -> if && if
            saveToMatch.shift();
        } else if (openingBrackets.indexOf(item) !== -1) {
            saveToMatch.unshift(item);
        }
    })
    return saveToMatch.length === 0 ? true : false // empty object gives true, so length check is apt
}


// more consice, form pair of brackets and delete each match from string

// function check(str, bracketsConfig) {
//     bracketsConfig = bracketsConfig.map(item => item.join('')) // return for this block only!\
//     for (let i = 0; i < bracketsConfig.length;) {
//         if (str.includes(bracketsConfig[i])) {
//             str = str.replace(bracketsConfig[i], ''); //non-mutative, if nothimg to replace, no error
//             i = 0; // once match, start loop from the begining
//         } else i++;
//     }
//     return !str;
// }
