//removing repeated element from an array
function removeRepeat(array) {
    let newArray = [];
    for (const item of array) {   //for (..of..array) is used here to get the items of an array

        if (newArray.indexOf(item) == -1) {
            newArray.push(item);
        }
    }
    return newArray;
}

const myArray = [1, 2, 3, 1, 2, 2, 4, 5, 5, 6, 7, 8, 9, 9, 8, 9, 0];
const sortedArray = removeRepeat(myArray);
console.log(sortedArray);
const yourArray = ['liton', 'milton', 'liton'];
const sortedArray1 = removeRepeat(yourArray);
console.log(sortedArray1);
