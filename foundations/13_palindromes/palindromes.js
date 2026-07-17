const palindromes = function (str) {
    let string = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedString = string.split("").reverse().join("");
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
