import fs from 'fs';
// const fs = require('fs');

const arr = [];

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    arr.push(data.toString().replace(/\r\n/g,'\n').split('\n'));

    // console.log(arr);
    // for(let i of arr) {
    //     console.log(i);
    // }
});

console.log('input array', arr);


// export default arr;