const removeFromArray = function() {
    let array = arguments[0];
    let argumentsLength = arguments.length;
    for(let i = 1; i < argumentsLength; i++){
        if(array.indexOf(arguments[i]) !== -1){
            let indexToRemove = array.indexOf(arguments[i]);
            array.splice(indexToRemove, 1);
        }
    }
    return array;
}

module.exports = removeFromArray
