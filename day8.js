import fs from 'fs';

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

    const input = data.toString().replace(/\r\n/g,'\n').split(/\s+/);
    
    let count1470 = 0;
    for (let i =0; i < input.length; i++) {
        // console.log(input[i],',');
        
        if (input[i] === '|') {
            console.log('Current value', input[i], 'at input', i);
            for (let value = 1; value < 5; value++) {
                console.log('Next value', input[i + value]);

                if (input[i + value].length === 2 || 
                    input[i + value].length === 3 || 
                    input[i + value].length === 4 || 
                    input[i + value].length === 7) {
                        count1470++;
                        console.log('count', count1470);
                    }
            }
        }
        
    }
    console.log(count1470);
    // console.log(input.length);
    // console.log(input.at(52));

});