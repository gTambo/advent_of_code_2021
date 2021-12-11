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

    const checkBinaryValueFavorZero = (int, array) => {
        let oneCount = 0;
        //  counter for o's
        let zeroCount= 0;    
        for(let index = 0; index < array.length; index++) {
            // console.log(input);
            let input = array[index];

            if (input[int] == '0') {
                zeroCount++;
            } else if (input[int] == '1') {
                oneCount++;
            }
            // return { ones: oneCount, zeros: zeroCount }
        }
        console.log('Ones', oneCount, 'Zeros', zeroCount);
        if (oneCount > zeroCount || oneCount === zeroCount) {
            return 0;
        } else {
            return 1;
        }
    }
    // Use binary value checker to eliminate values and push to new array
    console.log(checkBinaryValueFavorOne(0, arr));
    const newArray = (index, oldArray) => {
        let arrTwo = [];
        const filterValue = checkBinaryValueFavorOne(index, oldArray);
        for (let i = 0; i < oldArray.length; i++) {
            let input = oldArray[i]
            if(input[index] == filterValue) {
                arrTwo.push(oldArray[i]);
            }
        }
        return arrTwo;
    }

    const newArrayLesser = (index, oldArray) => {
        let arrTwo = [];
        const filterValue = checkBinaryValueFavorZero(index, oldArray);
        for (let i = 0; i < oldArray.length; i++) {
            let input = oldArray[i]
            if(input[index] == filterValue) {
                arrTwo.push(oldArray[i]);
            }
        }
        return arrTwo;
    }
    
    const arr1 = newArray(0, arr);
    // console.log('arr1', arr1);
    const arr2 = newArray(1, arr1);
    // console.log('arr2', arr2);
    const arr3 = newArray(2, arr2);
    // console.log('arr3', arr3);
    const arr4 = newArray(3, arr3);
    // console.log('arr4', arr4);
    const arr5 = newArray(4, arr4);
    // console.log('arr5', arr5);
    const arr6 = newArray(5, arr5);
    // console.log('arr6', arr6);
    const arr7 = newArray(6, arr6);
    const arr8 = newArray(7, arr7);
    // console.log('arr8', arr8);
    const arr9 = newArray(8, arr8);
    // console.log('arr9', arr9);
    const arr10 = newArray(9, arr9);
    // console.log('arr10', arr10);
    const arr11 = newArray(10, arr10);
    // console.log('arr11', arr11);

    const o2GenRating = parseInt(arr11[0], 2);
    
    const findO2Results = (array) => {
        for (let i = 0; i < 12; i++) {
            console.log('array length:', array.length);
            if(array.length === 1) {
                return array[0];
            }
            array = newArray(i, array);
        }
    }
    const oxygenGenRating = parseInt(findO2Results(arr), 2);
    console.log("O2 generator rating found with loop", oxygenGenRating);

    const findCO2Results = (array) => {
        for (let i = 0; i < 12; i++) {
            console.log('array length:', array.length);
            if(array.length === 1) {
                return array[0];
            }
            array = newArrayLesser(i, array);
        }
    }
    const CO2ScrubRating = parseInt(findCO2Results(arr), 2);
    console.log("CO2 Scrub rating found with loop", CO2ScrubRating);
    // console.log("previously found O2 rating, as integer", o2GenRating);
    console.log('Anser:', oxygenGenRating*CO2ScrubRating);
}).catch(err => {
    console.log('Error', err);
});