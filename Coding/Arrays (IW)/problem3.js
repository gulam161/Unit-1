// Given an array of numbers find the average of all the even numbers.

function averageOf(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++
    }
  }
  let average = sum / count;
  console.log(average);
}
let arr = [1, 2, 3, 4, 5];
averageOf(arr)