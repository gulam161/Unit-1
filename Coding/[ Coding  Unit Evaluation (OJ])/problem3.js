// You have to find the sum of product of elements present in array and the position at which they are present in the array.

function sumOfProducts(N, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i] * (i + 1);
  }
  console.log(sum);
}
let arr = [2, 5, 4, 6, 8]
sumOfProducts(5, arr)