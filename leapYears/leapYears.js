const leapYears = function(year) {
    let yearTested = year;
    if(yearTested % 4 === 0 && yearTested % 100 !== 0){
        return true;
    } else {
        if(yearTested % 400 === 0){
            return true;
        } else {
            return false;
        }
    }

}

module.exports = leapYears
