// Given an array of string count the overall total number of characters

let arr = ["Ashish", "Chunnu", "Munnu", "Junior",];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count += arr[i].length;
}
console.log(count)