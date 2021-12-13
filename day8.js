import { count } from 'console';
import fs from 'fs';

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

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