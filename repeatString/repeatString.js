
const repeatString = function(string, numberOfRepeats) {
    if(numberOfRepeats < 0){
        return "ERROR";
    } else if (numberOfRepeats === 0) {
        return "";
    } else {
        let completedString = "";
        for(let i = 0; i < numberOfRepeats; i++){
            completedString += string;
        }
        return completedString;
    }
}

module.exports = repeatString
