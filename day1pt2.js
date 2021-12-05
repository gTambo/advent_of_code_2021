import puzzleInputArray from './day1Input.js';
import countIncrease from './day1.js';

function sumByThree(arr) {
    // declare new array to hold sums
    const sums = [];
    for (let i = 0; i < arr.length - 2; i++) {
        sums.push(arr[i] + arr[i + 1] + arr[i + 2])
    }
    return sums;
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

const sampleArrayOfSums = sumByThree(sampleArr);
console.log('compare windows of 3s for sample array', countIncrease(sampleArrayOfSums));
    
const newArrayOfSums = sumByThree(puzzleInputArray)
console.log('first index of new array', newArrayOfSums[0], 'and last', newArrayOfSums[newArrayOfSums.length - 1]);

// calculate increases of summed measurements
console.log('comparing sums of 3 measurements', countIncrease(newArrayOfSums));