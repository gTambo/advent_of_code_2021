import fs from 'fs';

/**
 *  GOAL: Determine winning board and calculate it's score
 * 
 *  input: comma separated string of numbers (no spaces) followed by two line breaks, then 5 lines of 5 numbers each (between 0 and 100)
 *      with 120 grids of 5-by-5 numbers
 * 
 * steps:
 * 
 * 
 *      - isolate list of numbers that will be drawn into iterable array
 *      - isolate grids 
 *          - array of objects? Array of arrays?
 *      - iterate through grids with each darwn number item, looking for "matches"
 *          - how to record "matches?"
 *          - mark each number, or change to new variable? 
 *      - for each drawn number after first five numbers drawn, check for consecutive "matches"
 *      - construct two CheckWinner functions; one for vertical bingo, one for horizontal bingo
 *      - embed checkWinner functions into larger function
 *          - - checkWinner functions can return false by default, and true if a winner is found
 *      - construct total score function that calculates the total score as laid out by the rules
 *      - embed calculateScore function into larger function to run as soon as a winning board is found 
 *          - aka - as soon as either checkWinner function returns true, run the calculation.
 * 
 *      - Run the parent function to determine the 
 * 
 */

function bingoCardCreator(arr) {
    const allBingoCards = [];

    for (let i = 1; i < arr.length; i+= 6) {
        const card = {
            row1: arr[i + 1],
            row2: arr[i + 2],
            row3: arr[i + 3],
            row4: arr[i + 4],
            row5: arr[i + 5],
        }

        // console.log('Card', card);
        allBingoCards.push(card);
    }
    return allBingoCards;
}

fs.readFile('inputD4.txt', function(err, data) {
    try {
        if (err) throw err;

        const input = data.toString().replace(/\r\n/g,'\n').split(/\n/);




        const drawNumbers = input[0].split(',');

        for (let item of drawNumbers) {
            console.log(item);
        }

        const bingoCards = bingoCardCreator(input);

        // for (let i = 1; i < input.length; i++) {
        //     if (input[i] === '') {
        //         console.log('i is:', i, 'input is a space', input[i]);
        //     }
        // }

        console.log('Third input item', input[2], 'input length', input.length);
        console.log("bingo cards", bingoCards, 'number of bingo cards', bingoCards.length);

    } catch (err) {
        console.log('There was an error:', err);
    }
});