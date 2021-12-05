import puzzleInputArray from './day1Input.js';


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

// calculate increase count for puzzle input array
console.log('depth increase for puzzle input', countIncrease(puzzleInputArray));


export default countIncrease;