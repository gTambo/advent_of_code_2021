import fs from 'fs';

// let intersection = arr1.filter(x => arr2.includes(x));

// let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

    // 7 possible positions
    // let p0; // top // Found by the diff between 7 and 1
    // let p1; // upper left // included in 4, 5, 6, 8, 9, 0
    // let p2; // upper right // included in 1, 2, 3, 4, 7, 8, 9, 0 (everything except 5 and 6)
    // let p3; // center // included in 2, 3, 4, 5, 6, 8, 9 -- difference between 8 and 0
    // let p4; // lower left // found by the diff between 8 and 9
    // let p5; // lower right
    // let p6; // bottom

    // unique signal patterns
    // 1 => input[i].length == 2;
    // 4 => input[i].length == 4;
    // 7 => input[i].input == 3;
    // 8 => input[i].length == 7;

    // non-unique signal patterns
    // '0' .length == 6
    // '2' .length == 5
    // '3' .length == 5
    // '5' .length == 5
    // '6' .length == 6
    // '9' .length == 6

    // let zero = '';
    // let one = '';
    // let two= '';
    // let three = '';
    // let four = '';
    // let five = '';
    // let six = '';
    // let seven = '';
    // let eight = '';
    // let nine = '';



    const input = data.toString().replace(/\r\n/g,'\n').split(/\n/);
    
    Array.prototype.intersect = function(arr2) { return this.filter(x => arr2.includes(x)); }
    Array.prototype.diff = function(arr2) { return this.filter(x => !arr2.includes(x)); }

    // array for the output of each line in the input file
    const outputValues = [];

    for (let index = 0; index < input.length; index+=1) {
        // console.log("row ", index);
        const row = input[index].split(/\s+/);
        // console.log("row is ", row);
        
        const rowSplit = input[index].split('|');
        console.log('Row split on |', rowSplit);
        const lastFour = rowSplit[1].split(/\s+/).filter(x => x != '');
        console.log("Last Four", lastFour);
        // outputValues.push(lastFour);

        // 7 possible positions
        let p0; // top // Found by the diff between 7 and 1
        let p1; // upper left // included in 4, 5, 6, 8, 9, 0
        let p2; // upper right // included in 1, 2, 3, 4, 7, 8, 9, 0 (everything except 5 and 6)
        let p3; // center // included in 2, 3, 4, 5, 6, 8, 9 -- difference between 8 and 0
        let p4; // lower left // found by the diff between 8 and 9
        let p5; // lower right
        let p6; // bottom
        const signalPatterns = {
            zero: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''
        }

          
        for (let i = 0; i < row.length; i++) {

            switch (row[i].length) {
                // one
                case 2:
                    signalPatterns.one = row[i];
                    
                    // console.log('found One:', signalPatterns.one);
                    break;
                // Seven
                case 3:
                    signalPatterns.seven = row[i];
                    
                    // console.log('found Seven:', signalPatterns.seven);
                    break;
                // four
                case 4:
                    signalPatterns.four = row[i];
                    
                    // console.log('found Four:', signalPatterns.four);
                    break;
                // eight
                case 7:
                    signalPatterns.eight = row[i];
                    
                    // console.log('found Eight:', signalPatterns.eight);
                    break;
                default:
                    // console.log('No matches');
                    break;
            }

            // find six
            if (p4 && signalPatterns.five != '') {
                signalPatterns.six = signalPatterns.five.split('').concat(p4).join('');
                
                // console.log('found Six', signalPatterns.six);
            }

            // find five
            if (signalPatterns.seven && signalPatterns.four && row[i].length == 5) {
                let checkNum = row[i].split('');
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.five = row[i];
                    
                    // console.log('found Five', signalPatterns.five);
                }
            }

            // find position Zero
            if (signalPatterns.seven != '' && signalPatterns.one != '') {
                p0 = signalPatterns.seven.split('').diff(signalPatterns.one.split(''));
                console.log('Position zero:', p0);
            }

            // find nine and position Six
            if (p0 && signalPatterns.four != '' && row[i].length === 6) {
                let notNine = signalPatterns.four.split('').concat(p0);
                // console.log('compare', notNine, 'with input', row[i]);
                if (row[i].split('').diff(notNine).length === 1) {
                    signalPatterns.nine = row[i];
                    
                    // console.log('found Nine:', signalPatterns.nine);
                    p6 = row[i].split('').diff(notNine);
                    console.log('Position Six:', p6);
                }
            }

            // find position four
            if (signalPatterns.eight != '' && signalPatterns.nine != '') {
                p4 = signalPatterns.eight.split('').diff(signalPatterns.nine.split(''));
                console.log('position Four:', p4);
            }

            // find three
            if (signalPatterns.seven.length > 0 && signalPatterns.four.length > 0 && row[i].length == 5) {
                let checkNum = row[i].split('');
                // console.log('could this be three?', checkNum);
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 3 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.three = row[i];
                    
                    // console.log('found three', signalPatterns.three);
                }
            }

            // find two
            if (signalPatterns.seven != '' && signalPatterns.four != '' && row[i].length == 5) {
                let checkNum = row[i].split('');
     
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 2) {
                    signalPatterns.two = row[i];
                    
                    // console.log('found two', signalPatterns.two);
                }
            }

            // find position Five
            if (signalPatterns.seven != 0 && signalPatterns.two != '') {
                const notP5 = signalPatterns.two.split('').intersect(signalPatterns.seven.split(''));
                // console.log("positions in common between 7 and 2:", notP5);
                p5 = signalPatterns.seven.split('').diff(notP5);
                console.log("position Five:", p5);
            }

            // find zero
            if (signalPatterns.eight != '' && p3) {
                signalPatterns.zero = signalPatterns.eight.split('').filter(x => x != p3).join('');
                
                // console.log('found Zero', signalPatterns.zero);
            }


            // six again?
            if (p4 && signalPatterns.five != '') {
                signalPatterns.six = signalPatterns.five.split('').concat(p4).join('');

                // console.log('found Six', signalPatterns.six);
            }

            // find position Three -- This isn't guaranteed
            if (signalPatterns.seven != 0 && signalPatterns.two != '' && p4 && p6) {
                let notQuiteTwo = signalPatterns.seven.split('').concat(p4, p6);
                // console.log('Seven plus p4 and p6', notQuiteTwo, 'vs Two:', signalPatterns.two.split(''));
                p3 = signalPatterns.two.split('').diff(notQuiteTwo);
                console.log('Position Three:', p3);
            }
        }
            
        for (let j = row.length - 1; j >= 0; j--) {

            switch (row[j].length) {
                // one
                case 2:
                    signalPatterns.one = row[j];
                    
                    // console.log('found One:', signalPatterns.one);
                    break;
                // Seven
                case 3:
                    signalPatterns.seven = row[j];
                    
                    // console.log('found Seven:', signalPatterns.seven);
                    break;
                // four
                case 4:
                    signalPatterns.four = row[j];
                    
                    // console.log('found Four:', signalPatterns.four);
                    break;
                // eight
                case 7:
                    signalPatterns.eight = row[j];
                    
                    // console.log('found Eight:', signalPatterns.eight);
                    break;
                default:
                    // console.log('No matches');
                    break;
            }

            // find six
            if (p4 && signalPatterns.five != '') {
                signalPatterns.six = signalPatterns.five.split('').concat(p4).join('');
                
                // console.log('found Six', signalPatterns.six);
            }

            // find five
            if (signalPatterns.seven && signalPatterns.four && row[j].length == 5) {
                let checkNum = row[j].split('');
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.five = row[j];
                    
                    // console.log('found Five', signalPatterns.five);
                }
            }

            // find position Zero
            if (signalPatterns.seven != '' && signalPatterns.one != '') {
                p0 = signalPatterns.seven.split('').diff(signalPatterns.one.split(''));
                console.log('Position zero:', p0);
            }

            // find nine and position Six
            if (p0 && signalPatterns.four != '' && row[j].length === 6) {
                let notNine = signalPatterns.four.split('').concat(p0);
                // console.log('compare', notNine, 'with input', row[j]);
                if (row[j].split('').diff(notNine).length === 1) {
                    signalPatterns.nine = row[j];
                    
                    console.log('found Nine:', signalPatterns.nine);
                    p6 = row[j].split('').diff(notNine);
                    console.log('Position Six:', p6);
                }
            }

            // find position 3

            // find position four
            if (signalPatterns.eight != '' && signalPatterns.nine != '') {
                p4 = signalPatterns.eight.split('').diff(signalPatterns.nine.split(''));
                console.log('position Four:', p4);
            }

            // find three
            if (signalPatterns.seven.length > 0 && signalPatterns.four.length > 0 && row[j].length == 5) {
                let checkNum = row[j].split('');
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 3 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.three = row[j];
                    
                    // console.log('found three', signalPatterns.three);
                }
            }

            // find two
            if (signalPatterns.seven != '' && signalPatterns.four != '' && row[j].length == 5) {
                let checkNum = row[j].split('');
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 2) {
                    signalPatterns.two = row[j];
                    
                    // console.log('found two', signalPatterns.two);
                }
            }

            // find position Five
            if (signalPatterns.seven != 0 && signalPatterns.two != '') {
                const notP5 = signalPatterns.two.split('').intersect(signalPatterns.seven.split(''));
                p5 = signalPatterns.seven.split('').diff(notP5);
                console.log("position Five:", p5);
            }

            // find zero
            if (signalPatterns.eight != '' && p3) {
                signalPatterns.zero = signalPatterns.eight.split('').filter(x => x != p3).join('');
                
                console.log('found Zero', signalPatterns.zero);
            }


            // six again?
            if (p4 && signalPatterns.five != '') {
                signalPatterns.six = signalPatterns.five.split('').concat(p4).join('');
                console.log('found Six', signalPatterns.six);
            }

            // // find position Three -- This isn't guaranteed
            // if (signalPatterns.seven != 0 && signalPatterns.two != '' && p4 && p6) {
            //     let notQuiteTwo = signalPatterns.seven.split('').concat(p4, p6);
            //     // console.log('Seven plus p4 and p6', notQuiteTwo, 'vs Two:', signalPatterns.two.split(''));
            //     p3 = signalPatterns.two.split('').diff(notQuiteTwo);
            //     console.log('Position Three:', p3);
            // }
        }
        

        console.log('Signal Patterns', signalPatterns, 'for row', index);
        // console.log('Found the following positions:', p0, p1, p2, p3, p4, p5, p6);

        // Using the signal patterns info found above, decode the lastFour

        // new variable to hold output as integer
        let outputNumber = '';
        const outputConversionArray = [];
        for(let item = 0; item < lastFour.length; item++) {
            let a = lastFour[item]
            console.log('value', a, 'at index', item);
            
            switch(true) {
                case a.length === signalPatterns.one.length && 
                    a.split('').intersect(signalPatterns.one.split('')).length == a.length:
                    outputConversionArray.push(1);
                    break;
                case a.length === signalPatterns.two.length && 
                    a.split('').intersect(signalPatterns.two.split('')).length == a.length:
                    outputConversionArray.push(2);
                    break;
                case a.length === signalPatterns.three.length && 
                    a.split('').intersect(signalPatterns.three.split('')).length == a.length:
                    outputConversionArray.push(3);
                    break;
                case a.length === signalPatterns.four.length && 
                    a.split('').intersect(signalPatterns.four.split('')).length == a.length:
                    outputConversionArray.push(4);
                    break;
                case a.length === signalPatterns.five.length && 
                    a.split('').intersect(signalPatterns.five.split('')).length == a.length:
                    outputConversionArray.push(5);
                    break;
                case a.length === signalPatterns.six.length && 
                    a.split('').intersect(signalPatterns.six.split('')).length == a.length:
                    outputConversionArray.push(6);
                    break;
                case a.length === signalPatterns.seven.length && 
                    a.split('').intersect(signalPatterns.seven.split('')).length == a.length:
                    outputConversionArray.push(7);
                    break;
                case a.length === signalPatterns.eight.length && 
                    a.split('').intersect(signalPatterns.eight.split('')).length == a.length:
                    outputConversionArray.push(8);
                    break;
                case a.length === signalPatterns.nine.length && 
                    a.split('').intersect(signalPatterns.nine.split('')).length == a.length:
                    outputConversionArray.push(9);
                    break;
                case a.length === signalPatterns.zero.length && 
                    a.split('').intersect(signalPatterns.zero.split('')).length == a.length:
                    outputConversionArray.push(0);
                    break;
                default:
                    break;
            }
            console.log('Output array', outputConversionArray);
            
        }
        outputNumber = parseInt(outputConversionArray.join(''));
        console.log('Output Number', outputNumber);
        outputValues.push(outputNumber);
    }
    
    console.log('Input length:', input.length);
    console.log('Array of outputs is', outputValues.length, 'lines long');
    // count outputValues array
    let sum = 0;
    for (let i = 0; i < outputValues.length; i++) {
        sum += outputValues[i];
    }
    console.log('sum of output array', sum);
});