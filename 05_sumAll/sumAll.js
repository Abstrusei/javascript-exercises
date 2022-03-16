const sumAll = function(start, end) {
    let result = start + end;
    if ((typeof start !== 'number' || typeof end !== 'number' ) 
    || (start < 0 || end < 0)) {
        return 'ERROR';
    }
    if (start > end) {
        oldStart = start;
        start = end;
        end = oldStart;
    }  
    for (let numToAdd = start + 1; numToAdd < end; numToAdd++) {
         result += numToAdd;
    }
    return result;
};

sumAll(4,1)
// [1,4] -> [1,2,3,4]

// Do not edit below this line
module.exports = sumAll;
