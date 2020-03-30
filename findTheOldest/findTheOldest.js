let findTheOldest = function(obj) {
    return obj.reduce((oldest, eachPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(eachPerson.yearOfBirth, eachPerson.yearOfDeath);
        return oldestAge < currentAge ? eachPerson : oldest; 
    })
}

const getAge = function(birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
