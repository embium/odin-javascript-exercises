const repeatString = function(string, num) {
    let newString = "";
    for(i = 0; i < num; i++){
        newString = newString + string
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
