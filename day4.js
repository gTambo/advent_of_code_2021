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
            row1: arr[i + 1].split(/\s+/),
            row2: arr[i + 2].split(/\s+/),
            row3: arr[i + 3].split(/\s+/),
            row4: arr[i + 4].split(/\s+/),
            row5: arr[i + 5].split(/\s+/),
        }

        // console.log('Card', card);
        allBingoCards.push(card);
    }
    return allBingoCards;
}

// input is an integer to compare against for matches and a 5x5 bingo board object 
function findMatches(randomInt, bingoBoard) {
    // output willl be new bingoBoard object with matches marked
    
    // create anonymous function to check for matches
    const checkRow = (checkInt, row) => {
        const newRow = [];
        // console.log('looking for a match', checkInt);
        for (let item of row) {
            // console.log('this:', item, 'is an item in row:', row);
            if (item === checkInt) {
                // console.log('found a match', item, checkInt);
                newRow.push('b' + item);
                // console.log('item is now:', item);
            } else {
                newRow.push(item);
            }
        }
        console.log('New Row Generated', newRow);
        return newRow;
    } 

    const nextRoundBoard = {
        row1: checkRow(randomInt, bingoBoard.row1),
        row2: checkRow(randomInt, bingoBoard.row2),
        row3: checkRow(randomInt, bingoBoard.row3),
        row4: checkRow(randomInt, bingoBoard.row4),
        row5: checkRow(randomInt, bingoBoard.row5),
    }

    return nextRoundBoard;
}

// function to run a round of bingo - draw a number, search for matches
function playARound(drawnNumber, bingoBoards) {
    const bingoRound = [];
    for (let board of bingoBoards) {
        bingoRound.push(findMatches(drawnNumber, board)); 
    }
    return bingoRound;
}

fs.readFile('inputD4.txt', function(err, data) {
    try {
        if (err) throw err;

        const input = data.toString().replace(/\r\n/g,'\n').split(/\n/);




        const drawNumbers = input[0].split(',');

        // for (let item of drawNumbers) {
        //     console.log(item);
        // }

        const bingoCards = bingoCardCreator(input);

        // for (let i = 1; i < input.length; i++) {
        //     if (input[i] === '') {
        //         console.log('i is:', i, 'input is a space', input[i]);
        //     }
        // }

        // write function that takes in the drawNumbers and bingoCards array, 
        // and gives out the boards with matches, using match checker function
        const firstFiveRounds = (integerArray, cardsArray) => {
            let thisRound = cardsArray;
            for (let i = 0; i < 5; i++) {

                const nextRound = [];
                let newCard = {};
                for (let card of thisRound) {
                    console.log('the is a bingo card', card);
                    console.log('check cards for this number', integerArray[i]);
                    newCard = findMatches(integerArray[i], card);
                    nextRound.push(newCard);
                }
                // console.log('Next Round array', nextRound);
                thisRound = nextRound;
            }
            // console.log('round Five is now:', thisRound);
            return thisRound;
        }

        // console.log('what is drawNumbers[0]?', drawNumbers[0], 'and bingoCards[0]?', bingoCards[0]);
        const roundOne = playARound(drawNumbers[0], bingoCards);
        // console.log('first round', roundOne);

        const roundTwo = playARound(drawNumbers[1], roundOne);
        // console.log('second round', roundTwo, 'second number', drawNumbers[1]);
        
        const roundThree = playARound(drawNumbers[2], roundTwo);
        // console.log('third round', roundThree, 'third number', drawNumbers[2]);

        const roundFour = playARound(drawNumbers[3], roundThree);
        // console.log('fourth round', roundFour, 'fourth number', drawNumbers[3]);

        const roundFive = playARound(drawNumbers[4], roundFour);
        console.log('fifth round', roundFive, 'Fifth number', drawNumbers[4]);
        // const round5 = firstFiveRounds(drawNumbers, bingoCards);


        // console.log('Last card', round5.at(-1), 'first 5 numbers', drawNumbers[0], drawNumbers[1], drawNumbers[2], drawNumbers[3], drawNumbers[4], 'initial bingo cards:', bingoCards.length, 'total cards after first 5 rounds:', round5.length);
        // console.log('Third input item', input[2], 'input length', input.length);
        // console.log("bingo cards", bingoCards, 'number of bingo cards', bingoCards.length);


    } catch (err) {
        console.log('There was an error:', err);
    }
});