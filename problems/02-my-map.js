/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

function myMap(array, cb) {
    // return array
    newArr  = []
            // create a for loop
    for(let i  = 0; i < array.length; i++){
    // create variable for index
    let big = array[i]
    // make previous variable go through call back
     small = cb(big, i, array)
    // return call back to retrun array
    newArr.push(small)

    }
        return newArr
}
let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myMap;
} catch(e) {
    return null;
}
