let array = [0,2,4,6,8,10,12,14,16,18,20]

let reversedArray = []

for(let i = array.length - 1; i >= 0; i--) {
  let valore = array[i]

  reversedArray.push(valore)
}

console.log(reversedArray);
// [4, 3, 2, 1]