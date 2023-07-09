function battleOfOddAndEven(n, arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      sum1 += arr[i]
    }
    if (arr[i] % 2 === 0) {
      sum2 += arr[i]
    }
  }
  if (sum1 > sum2) {
    console.log("Odd")
  } else {
    console.log("Even")
  }
}
let arr = [1, 2, 3, 4,5,6];
battleOfOddAndEven(arr.length, arr)