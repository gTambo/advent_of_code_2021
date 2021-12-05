import puzzleInputArray from './day1Input.js';

function sumByThree(arr) {
    // declare new array to hold sums
    const sums = [];
    for (let i = 0; i < arr.length - 2; i++) {
        sums.push(arr[i] + arr[i + 1] + arr[i + 2])
    }
    return sums;
}

const newArrayOfSums = sumByThree(puzzleInputArray)
console.log('first index of new array', newArrayOfSums[0], 'and last', newArrayOfSums[newArrayOfSums.length - 1]);
