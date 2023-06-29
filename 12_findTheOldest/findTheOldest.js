const year = new Date().getFullYear();

const findTheOldest = function(arr) {
    return arr.reduce((prev, curr) => calculateAge(curr) > calculateAge(prev) ? curr : prev);
};

function calculateAge(person) {
    return ((person.yearOfDeath ?? year) - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
