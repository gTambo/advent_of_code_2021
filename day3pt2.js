import fs from 'fs';

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    console.log(arr);

    // use recursion to find oxygen generator rating and co2 scrubber rating
});