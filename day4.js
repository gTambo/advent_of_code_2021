import fs from 'fs';

fs.readFile('inputD4.txt', function(err, data) {
    try {
        if (err) throw err;

        const input = data.toString().replace(/\r\n/g,'\n');

        for (let item of input) {
            console.log(item);
        }



    } catch (err) {
        console.log('There was an error:', err);
    }
});