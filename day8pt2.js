import fs from 'fs';

// let intersection = arr1.filter(x => arr2.includes(x));

// let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

    // 7 possible positions
    let p0; // top 
    let p1; // upper left 
    let p2; // upper right
    let p3; // center
    let p4; // lower left
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
    const arr1 = ['a', 'b'];
    const arr2 = ['a', 'b', 'c', 'd'];
    // console.log(arr1.diff(arr2));
    // console.log(arr1.intersect(arr2));

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
        for (let i = 0; i < row.length; i++){
            switch(row[i].length){
                case 2:
                    console.log('found One: ', row[i]);
                    break;
                case 3:
                    console.log('found Seven: ', row[i]);
                    break;
                case 4:
                    console.log('found Four: ', row[i]);
                    break;
                case 7:
                    console.log('found Eight: ', row[i]);
                    break;
                default:
                    // console.log('No matches');
                    break;
            }
            // console.log("input is ", input[row + i]);
            // if (input[row + i].length === 2) {
            //     console.log('found One: ', input[row + i]);
            // }
            
        }
    }
    console.log(input.length);
    // console.log(input.at(52));

});