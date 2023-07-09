// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function averageOf(arr) {
  let n = arr.length;
  if (n == 0) {
    // console.log(0);
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i]
  }
  let avg = sum / n
  // console.log(averg);
  return avg
}
let arr = [1, 2, 3, 4, 5]
console.log(averageOf(arr))