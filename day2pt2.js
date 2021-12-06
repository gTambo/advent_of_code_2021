import instructionsArr from "./day2Input.js";

function navigateSub(arr) {
    // new variable for horizontal location
    let x = 0;
    // new var for depth
    let y = 0;
    // new var for aim
    let aim = 0;
    // loop through given array
    for (let index = 0; index < arr.length; index+=2) {
        // check for specific strings at each index 
        switch(arr[index]) {
            case 'forward':
                x += parseInt(arr[(index + 1)]); // the next index will be the integer or amount per instruction
                y += aim * parseInt(arr[(index + 1)]);
                break;
            case 'down':
                aim += parseInt(arr[(index + 1)]);
                break;
            case 'up':
                aim -= parseInt(arr[(index + 1)]);
                break;
            default:
                // in case we encounter a non-valid instruction e.g. an integer
                break;
        }
    }
    // give final coordinates in an object
    return { horizontal: x, depth: y };
}

const sampleInstructions = [
    'forward', '5',
    'down', '5',
    'forward', '8',
    'up', '3',
    'down', '8',
    'forward', '2'
];

// test function with sample instructions array
console.log('result of sample instructions', navigateSub(sampleInstructions));

// calculate challenge instructions
const finalLocation =navigateSub(instructionsArr); 
console.log('result of instructions from challenge data', finalLocation);
console.log('multiple of hoizontala by depth: ', finalLocation.horizontal*finalLocation.depth);