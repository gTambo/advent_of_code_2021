import instructionsArr from "./day2Input.js";

function navigateSub(arr) {
    // new variable for horizontal location
    let x = 0;
    // new var for depth
    let y = 0;
    // new var for aim
    let aim = 0;
    for (let index = 0; index < arr.length; index+=2) {
        console.log('index', index);
        switch(arr[index]) {
            case 'forward':
                console.log('in forward. Adding', arr[index + 1]);
                x += parseInt(arr[(index + 1)]);
                y += aim * parseInt(arr[(index + 1)]);
                console.log('x is', x);
                console.log('aim is ', aim);
                console.log('y is', y);
                break;
            case 'down':
                console.log('in down. Adding ', arr[index + 1]);
                aim += parseInt(arr[(index + 1)]);
                console.log('aim is ', aim);
                break;
            case 'up':
                console.log('in up. Subtracting ', arr[index + 1]);
                aim -= parseInt(arr[(index + 1)]);
                console.log('aim is ', aim);
                break;
            default:
                console.log('Not a valid instruction');
                break;
        }
    }
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