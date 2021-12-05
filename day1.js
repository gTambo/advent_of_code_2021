import puzzleInput from './day1Input.js';

function countIncrease(arr) {    
    
    // initialize counter variable
    let depthIncrease = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            depthIncrease = depthIncrease += 1;
        } else {
            // do nothing
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

// testing countIncrease function with sample array
console.log('depth increase for other arr', countIncrease(sampleArr));

// set new array to add integers from puzzleInput array
const puzzleInputIntegersArr = [];

// use parseInt to change strings of integers to plain integers and push to new array
for (let i = 0; i < puzzleInput.length; i++) {
    puzzleInputIntegersArr.push(parseInt(puzzleInput[i]));
} 

// something about the array of strings isn't comparing correctly...
console.log('depth increase for puzzle input', countIncrease(puzzleInput));

console.log('depth increase for puzzle input', countIncrease(puzzleInputIntegersArr));
