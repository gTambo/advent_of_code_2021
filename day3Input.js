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
    for(let input of arr) {
        console.log(input);
        for (let i = 0; i < 12; i++) {
            switch(i){
                case 0:
                    console.log('at first position:', input[i]);
                    position0.push(input[i]);
                    break;
                case 1:
                    console.log('at second position:', input[i]);
                    position1.push(input[i]);
                    break;
                case 2:
                    console.log('at third position:', input[i]);
                    position2.push(input[i]);
                    break;
                case 3:
                    console.log('at fourth position:', input[i]);
                    position3.push(input[i]);
                    break;
                case 4:
                    console.log('at fifth position:', input[i]);
                    position4.push(input[i]);
                    break;
                case 5:
                    console.log('at sixth position:', input[i]);
                    position5.push(input[i]);
                    break;
                case 6:
                    console.log('at seventh position:', input[i]);
                    position6.push(input[i]);
                    break;
                case 7:
                    console.log('at eighth position:', input[i]);
                    position7.push(input[i]);
                    break;
                case 8:
                    console.log('at ninth position:', input[i]);
                    position8.push(input[i]);
                    break;
                case 9:
                    console.log('at tenth position:', input[i]);
                    position9.push(input[i]);
                    break;
                case 10:
                    console.log('at eleventh position:', input[i]);
                    positionA.push(input[i]);
                    break;
                case 11:
                    console.log('at twelfth position:', input[i]);
                    positionB.push(input[i]);
                    break;
                default:
                    break;
            }
        }
    }
    //          then check the count of each '1' and '0' for each array,
    //          then compare the counts
    //          then set the corresponding gamma position with the result of each array count comparison
    //          then set the corresponding epsilon rate with the opposite result
    
});

// console.log('input array', arr);


// export default arr;