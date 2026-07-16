const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
    if (num1 < 0 || num2 < 0) return 'ERROR'
    
    let arr = [num1, num2].sort()
    let sum = 0
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i
    }
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;
