const repeatString = function(string, numOfRepeats) {
    let finalString = string; 
    if (numOfRepeats >= 0) {
        if (numOfRepeats == 0) {
            return '';
        }
        for (i = 1; i < numOfRepeats; i++) {
            finalString += string;
        }
        return finalString;
    }
    
    // throw Error;
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
