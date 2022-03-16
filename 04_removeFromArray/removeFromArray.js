const removeFromArray = function(array, ...elemsToRemove) {
    let newArray = [];
    for(elem of array) {
        if(!(elemsToRemove.includes(elem))) {
            newArray.push(elem);
        }
    }
    return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
