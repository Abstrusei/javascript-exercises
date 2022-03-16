
const reverseString = function(str) {
    let chars = str.split('');
    let reversedChars = '';
    for (let i = chars.length - 1; i >= 0; i--) {
        reversedChars += chars[i]
    }
    return reversedChars;
};

// reverseString('hello');

// Do not edit below this line
// module.exports = reverseString;


// Do not edit below this line
module.exports = reverseString;
