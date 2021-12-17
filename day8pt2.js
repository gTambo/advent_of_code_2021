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




    const input = data.toString().replace(/\r\n/g,'\n').split(/\n/);
    
    Array.prototype.intersect = function(arr2) { return this.filter(x => arr2.includes(x)); }
    Array.prototype.diff = function(arr2) { return this.filter(x => !arr2.includes(x)); }

    // for example
    const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    const first = input[0];
    const second = input[1];
    // console.log('first input', first, 'second input', second);
    // console.log('the difference', second.diff(first));

    // use while loop to count 'rows'
    // while (rowCount < 200) {
    for (let index = 0; index < input.length; index+=1) {
        console.log("row ", index);
        const row = input[index].split(/\s+/);
        // console.log("row is ", row);
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

        for (let i = 0; i < row.length; i++){
            
            switch(row[i].length){
                case 2:
                    signalPatterns.one = row[i];
                    console.log('found One:', signalPatterns.one);
                    break;
                case 3:
                    signalPatterns.seven = row[i];
                    console.log('found Seven:', signalPatterns.seven);
                    break;
                case 4:
                    signalPatterns.four = row[i];
                    console.log('found Four:', signalPatterns.four);
                    break;
                case 7:
                    signalPatterns.eight = row[i];
                    console.log('found Eight:', signalPatterns.eight);
                    break;
                default:
                    // console.log('No matches');
                    break;
            }
            if(signalPatterns.seven != '' && signalPatterns.one != '') {
                p0 = signalPatterns.seven.split('').diff(signalPatterns.one.split(''));
                console.log('Position zero:', p0);
            }
            if (p0 && signalPatterns.four != '' && row[i].length === 6) {
                let notNine = signalPatterns.four.split('').concat(p0);
                // console.log('compare', notNine, 'with input', row[i]);
                if(row[i].split('').diff(notNine).length === 1){
                    signalPatterns.nine = row[i];
                    console.log('found Nine:', signalPatterns.nine);
                    p6 = row[i].split('').diff(notNine);
                    console.log('Position Six:', p6);
                }
            }
            
            if (signalPatterns.eight != '' && signalPatterns.nine != '') {
                p4 = signalPatterns.eight.split('').diff(signalPatterns.nine.split(''));
                console.log('position Four:', p4);
            }

            if (signalPatterns.seven != '' && signalPatterns.four != '' && row[i].length == 5) {
                let checkNum = row[i].split('');
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.five = row[i];
                    console.log('found Five', signalPatterns.five);
                }
            }

            if (signalPatterns.seven != '' && signalPatterns.four != '' && row[i].length == 5) {
                let checkNum = row[i].split('');
                // console.log('could this be three?', checkNum);
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 3 && checkNum.intersect(signalPatterns.four.split('')).length == 3) {
                    signalPatterns.three = row[i];
                    console.log('found three', signalPatterns.three);
                }
            }

            if (signalPatterns.seven != '' && signalPatterns.four != '' && row[i].length == 5) {
                let checkNum = row[i].split('');
                // console.log('could this be two?', checkNum);
                // console.log('In common with Seven', checkNum.intersect(signalPatterns.seven.split('')));
                // console.log('In common with Four', checkNum.intersect(signalPatterns.four.split('')));
                if (checkNum.intersect(signalPatterns.seven.split('')).length == 2 && checkNum.intersect(signalPatterns.four.split('')).length == 2) {
 
                    signalPatterns.two = row[i];
                    // console.log('found two', signalPatterns.two);
                }
            }

            if (signalPatterns.seven != 0 && signalPatterns.two != '') {
                const notP5 = signalPatterns.two.split('').intersect(signalPatterns.seven.split(''));
                // console.log("positions in common between 7 and 2:", notP5);
                p5 = signalPatterns.seven.split('').diff(notP5);
                // console.log("position 5:", p5);
            }

            if (signalPatterns.eight != '' && p5) {
                signalPatterns.zero = signalPatterns.eight.split('').filter(x => x != p5).join('');
                // console.log('found Zero', signalPatterns.zero);
            }

            if (p4 && signalPatterns.five != '') {
                signalPatterns.six = signalPatterns.five.split('').concat(p4).join('');
                // console.log('found Six', signalPatterns.six);
            }

            // This isn't guaranteed
            if (signalPatterns.seven != 0 && signalPatterns.two != '' && p4 && p6) {
                let notQuiteTwo = signalPatterns.seven.split('').concat(p4, p6);
                // console.log('Seven plus p4 and p6', notQuiteTwo, 'vs Two:', signalPatterns.two.split(''));
                p3 = signalPatterns.two.split('').diff(notQuiteTwo);
                // console.log('Position 3:', p3);
            }
        }
        console.log('Signal Patterns', signalPatterns, 'for row', row);
    }
    // console.log(arr2.diff(arr1));
    // console.log(arr1.intersect(arr2));
    console.log(input.length);

});