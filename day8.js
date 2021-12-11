import fs from 'fs';

fs.readFile('inputD8.txt', function(err, data) {
    if(err) throw err;

    const input = data.toString().replace(/\r\n/g,'\n').split('\n');

    for (let i of input) {
        console.log(i);
    }

});