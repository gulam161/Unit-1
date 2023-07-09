// You have to find the count of all the subarrays, the sum of whose elements is even.

function evenSumSubArr(N, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum += arr[j];
      if (sum % 2 === 0) {
        count++
      }
    }
  }
  console.log(count)
}