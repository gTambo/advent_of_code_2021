
import puzzleInput from './day1Input.js';

let depthIncrease = 0;

function countIncrease(arr) {    

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > arr[(i - 1)]) {
            depthIncrease = depthIncrease += 1;
            console.log(arr[i], `increase at i =`, i);
            
        } else {
            // do nothing
            console.log(arr[i], 'no increase at i =', i);
            
        }
    }
    // console.log('count of depth increases: ', depthIncrease);
}

const sampleArr = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
];

console.log('depth increase for sample arr', countIncrease(sampleArr));


// console.log('puzzleInputCopy', puzzleInputCopy);
// console.log('last item of puzzleInputCopy array', puzzleInputCopy[puzzleInputCopy.length - 1]);


// countIncrease(puzzleInputCopy);
// console.log('depth increase for sample arr', depthIncrease);
console.log('first item of puzzleInputCopy array ', puzzleInput[0]);
