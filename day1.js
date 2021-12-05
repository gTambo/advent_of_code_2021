
import puzzleInput from './day1Input.js';


function countIncrease(arr) {    
    // initialize counter variable
    let depthIncrease = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            depthIncrease = depthIncrease += 1;
            // console.log(arr[i], `increase at i =`, i);
            
        } else {
            // do nothing
            // console.log(arr[i], 'no increase at i =', i);
            
        }
    }
    return depthIncrease;
}

const sampleArr = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    100,
    269,
    260,
    263,
    270
];

const otherArr = [
    1230, 34934, 29, 239082, 483, 38, 8389, 939, 940, 955, 30, 35
];

console.log('depth increase for other arr', countIncrease(sampleArr));

// console.log('Puzzle Input', puzzleInput);

const puzzleInputIntegersArr = [];

for (let i = 0; i < puzzleInput.length; i++) {
    puzzleInputIntegersArr.push(parseInt(puzzleInput[i]));
} 

// console.log('Puzzle Input integers', puzzleInputIntegersArr);

// console.log('puzzle input array', puzzleInput);
// console.log('last item of puzzleInputIntegersrr', puzzleInputIntegersArr[puzzleInputIntegersArr.length - 1]);

console.log('depth increase for puzzle input', countIncrease(puzzleInput));

console.log('depth increase for puzzle input', countIncrease(puzzleInputIntegersArr));
// console.log('first item of puzzleInputCopy array ', puzzleInputArr[0]);
