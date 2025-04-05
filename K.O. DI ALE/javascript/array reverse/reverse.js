let array = [3, 5, 7, 4, 2, 9];
let invertedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    invertedArray.push(array[i]);
}

console.log(invertedArray);