const reverseString = function(string) {
    let newString = string.split("")
    let reversed = newString.reverse()

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
