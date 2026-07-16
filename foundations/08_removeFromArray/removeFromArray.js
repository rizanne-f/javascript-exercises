const removeFromArray = function(arr, ...val) {
    return arr.filter(n => !val.includes(n))
    
    // a more roundabout solution
    // val.map(n => arr = arr.filter(num => num !== n))
    // return arr
};

// Do not edit below this line
module.exports = removeFromArray;
