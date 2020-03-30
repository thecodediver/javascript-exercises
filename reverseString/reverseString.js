const reverseString = function(string) {
    let stringArray = [];
    for(let i = 0; i < string.length; i++){
        stringArray.unshift(string[i]);
    }
    return stringArray.join("");
}

module.exports = reverseString
