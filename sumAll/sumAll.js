const sumAll = function(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(num1 >= 0 && num1 >= 0){
            if(num1 > num2){
                let totalNumber = 0;
                for(let i = num2; i <= num1; i++){
                    totalNumber += i;
                }
                return totalNumber;
            } else if (num2 > num1){
                let totalNumber = 0;
                for(let i = num1; i <= num2; i++){
                    totalNumber += i;
                }
                return totalNumber;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
}

module.exports = sumAll
