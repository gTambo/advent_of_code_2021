import fs from 'fs';

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

    const input = data.toString().replace(/\r\n/g,'\n').split(' ');

    let count1470 = 0;
    for (let i =0; i < input.length; i++) {
        // console.log(i);
        
        if (input[i] === '|') {
            // console.log(input[i]);
            for (let value = 1; value <= 4; value++) {
                if (input[i + value].length === 2 || 
                    input[i + value].length === 3 || 
                    input[i + value].length === 4 || 
                    input[i + value].length === 7) {
                        console.log(input[i + value]);
                        count1470++;
                    }
            }
        }
        
    }
    console.log(count1470);
    // console.log(input.length);
    // console.log(input.at(52));

});