import fs from 'fs';

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    console.log(arr);

    // use recursion to find oxygen generator rating and co2 scrubber rating
    // conceptually, if one input remains, stop maybe if(arr.length === 1){ return arr; }

    
    const checkBinaryValueFavorOne = (int, array) => {
        let oneCount = 0;
        //  counter for o's
        let zeroCount= 0;    
        for(let index = 0; index < array.length; index++) {
            // console.log(input);
            let input = array[index];
            // console.log("input is: ", input);
            // counter for 1's
            

            if (input[int] == '0') {
                zeroCount++;
            } else if (input[int] == '1') {
                oneCount++;
            }
            // return { ones: oneCount, zeros: zeroCount }
        }
        console.log('Ones', oneCount, 'Zeros', zeroCount);
        if (oneCount > zeroCount || oneCount === zeroCount) {
            return 1;
        } else {
            return 0;
        }
    }
    // Use binary value checker to eliminate values and push to new array
    console.log(checkBinaryValueFavorOne(0, arr));
    const newArray = (index, oldArray) => {
        let arrTwo = [];
        const filterValue = checkBinaryValueFavorOne(index, oldArray);
        for (let i = 0; i < oldArray.length; i++) {
            let input = oldArray[i]
            if(input[0] == filterValue) {
                arrTwo.push(oldArray[i]);
            }
        }
        return arrTwo;
    }
    console.log(newArray(0, arr));
});