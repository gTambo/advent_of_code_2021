import fs from 'fs';

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

    // console.log('array for position 0 is', position0);

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

    const position0count = countBinaries(position0);
    console.log('position zero counts', position0count);
   
    const position1count = countBinaries(position1);
    console.log('position one counts', position1count);
    const position2count = countBinaries(position2);
    console.log('position two counts', position2count);
    const position3count = countBinaries(position3);
    console.log('position three counts', position3count);
    const position4count = countBinaries(position4);
    console.log('position four counts', position4count);
    const position5count = countBinaries(position5);
    console.log('position five counts', position5count);
    const position6count = countBinaries(position6);
    console.log('position six counts', position6count);
    const position7count = countBinaries(position7);
    console.log('position seven counts', position7count);
    const position8count = countBinaries(position8);
    console.log('position eight counts', position8count);
    const position9count = countBinaries(position9);
    console.log('position nine counts', position9count);
    const positionAcount = countBinaries(positionA);
    console.log('position A counts', positionAcount);
    const positionBcount = countBinaries(positionB);
    console.log('position B counts', positionBcount);
    //          then compare the counts
    // new variables for gamma and epsilon
    const gamma = [];
    const epsilon = [];

    //          then set the corresponding gamma position with the result of each array count comparison
    const setRate = (obj) => {
        
        if (obj.ones > obj.zeros) {
            gamma.push(1);
            epsilon.push(0);
        } else if (obj.zeros > obj.ones) {
            gamma.push(0);
            epsilon.push(1);
        }
    }

    setRate(position0count);
    setRate(position1count);
    setRate(position2count);
    setRate(position3count);
    setRate(position4count);
    setRate(position5count);
    setRate(position6count);
    setRate(position7count);
    setRate(position8count);
    setRate(position9count);
    setRate(positionAcount);
    setRate(positionBcount);
    console.log("gamma", gamma, 'epsilon', epsilon);

    //          then set the corresponding epsilon rate with the opposite result
    const gammaActual = "".concat(...gamma);
    const epsilonActual = "".concat(...epsilon);
    console.log('Gamma', gammaActual, 'Epsilon', epsilonActual);
   
    let gammaAsInt = parseInt(gammaActual, 2);
    console.log("gamma integer", gammaAsInt);
    let epsilonAsInt = parseInt(epsilonActual, 2);
    console.log('epsilon integer', epsilonAsInt);
    console.log("Day 3 solution", gammaAsInt*epsilonAsInt);
});
