import fs from 'fs';
// const fs = require('fs');

const arr = [];

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    arr.push(data.toString().replace(/\r\n/g,'\n').split('\n'));

    // console.log(arr);

    // TO DO:   set 12 arrays, one for each position of a line of input

    const position0 = [];
    const position1 = [];
    const position2 = [];
    const position3 = [];
    const position4 = [];
    const position5 = [];
    const position6 = [];
    const position7 = [];
    const position8 = [];
    const position9 = [];
    const positionA = [];
    const positionB = [];

    //          then push from each position to each array, 
    console.log('Length of arr is', arr[0].length);
    for(let index = 0; index < arr[0].length; index++) {
        // console.log(input);
        let input = arr[0][index];
        // console.log("input is: ", input);
        for (let i = 0; i < input.length; i++) {
            switch(i){
                case 0:
                    // console.log('index is', index, 'at first position:', input[i]);
                    position0.push(input[i]);
                    break;
                case 1:
                    // console.log('index is', index, 'at second position:', input[i]);
                    position1.push(input[i]);
                    break;
                case 2:
                    // console.log('index is', index, 'at third position:', input[i]);
                    position2.push(input[i]);
                    break;
                case 3:
                    // console.log('index is', index, 'at fourth position:', input[i]);
                    position3.push(input[i]);
                    break;
                case 4:
                    // console.log('index is', index, 'at fifth position:', input[i]);
                    position4.push(input[i]);
                    break;
                case 5:
                    // console.log('index is', index, 'at sixth position:', input[i]);
                    position5.push(input[i]);
                    break;
                case 6:
                    // console.log('index is', index, 'at seventh position:', input[i]);
                    position6.push(input[i]);
                    break;
                case 7:
                    // console.log('index is', index, 'at eighth position:', input[i]);
                    position7.push(input[i]);
                    break;
                case 8:
                    // console.log('index is', index, 'at ninth position:', input[i]);
                    position8.push(input[i]);
                    break;
                case 9:
                    // console.log('index is', index, 'at tenth position:', input[i]);
                    position9.push(input[i]);
                    break;
                case 10:
                    // console.log('index is', index, 'at eleventh position:', input[i]);
                    positionA.push(input[i]);
                    break;
                case 11:
                    // console.log('index is', index, 'at twelfth position:', input[i]);
                    positionB.push(input[i]);
                    break;
                default:
                    break;
            }
        }
    }

    console.log('array for position 0 is', position0);

     //          then check the count of each '1' and '0' for each array,
    const countBinaries = (arrayOfIntegers) => {
        // counter for 1's
        let oneCount = 0;
        //  counter for o's
        let zeroCount= 0;
        for (let i = 0; i < arrayOfIntegers.length; i++) {
            if (arrayOfIntegers[i] == '0') {
                zeroCount++;
            } else if (arrayOfIntegers[i] == '1') {
                oneCount++;
            }
        }
        return { ones: oneCount, zeros: zeroCount }
    }

   
    //          then compare the counts
    //          then set the corresponding gamma position with the result of each array count comparison
    //          then set the corresponding epsilon rate with the opposite result
    
});

// console.log('input array', arr);


// export default arr;