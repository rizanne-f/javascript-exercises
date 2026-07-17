const findTheOldest = function(arr) {
    arr = arr.map(person => "yearOfDeath" in person ? person : {...person, yearOfDeath: new Date().getFullYear})
    let sorted = arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))
    return sorted[sorted.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
