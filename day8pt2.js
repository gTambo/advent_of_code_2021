import fs from 'fs';

// let intersection = arr1.filter(x => arr2.includes(x));

// let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

    // 7 possible positions
    let p0; // top // Found by the diff between 7 and 1
    let p1; // upper left // included in 4, 5, 6, 8, 9, 0
    let p2; // upper right // included in 1, 2, 3, 4, 7, 8, 9, 0 (everything except 5 and 6)
    let p3; // center // included in 2, 3, 4, 5, 6, 8, 9 -- difference between 8 and 0
    let p4; // lower left // found by the diff between 8 and 9
    let p5; // lower right
    let p6; // bottom

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
        let zero = '';
        let one = '';
        let two= '';
        let three = '';
        let four = '';
        let five = '';
        let six = '';
        let seven = '';
        let eight = '';
        let nine = '';

        for (let i = 0; i < row.length; i++){
            switch(row[i].length){
                case 2:
                    one = row[i];
                    console.log('found One:', one);
                    break;
                case 3:
                    seven = row[i];
                    console.log('found Seven:', seven);
                    break;
                case 4:
                    four = row[i];
                    console.log('found Four:', four);
                    break;
                case 7:
                    eight = row[i];
                    console.log('found Eight:', eight);
                    break;
                default:
                    // console.log('No matches');
                    break;
            }
            if(seven != '' && one != '') {
                p0 = seven.split('').diff(one.split(''));
                console.log('Position zero:', p0);
            }
            if (p0 && four != '' && row[i].length === 6) {
                let notNine = four.split('').concat(p0);
                console.log('compare', notNine, 'with input', row[i]);
                if(row[i].split('').diff(notNine).length === 1){
                    nine = row[i];
                    console.log('found Nine:', nine);
                    p6 = row[i].split('').diff(notNine);
                    console.log('Position 6:', p6);
                }
            }
            if (four != '' && nine != '')  {

            }
            if (eight != '' && nine != '') {
                p4 = eight.split('').diff(nine.split(''));
                console.log('position Four:', p4);
            }
            if (p3 && eight != '') {
                zero = eight.split('').filter(x => x != p3).join('');
                console.log('Zero:', zero);
            }
            // if (eight.split('').intersect(row[i].split('')).length === 6) {
            //     console.log('found Zero', row[i]);
            // }
            // console.log("input is ", input[row + i]);
            // if (input[row + i].length === 2) {
            //     console.log('found One: ', input[row + i]);
            // }
            
        }
    }
    // console.log(arr2.diff(arr1));
    // console.log(arr1.intersect(arr2));
    console.log(input.length);
    // console.log(input.at(52));

});