function ArraySum(n, arr) {
  let sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    sum += arr[i]
  }
  console.log(sum)
}
let arr = [1, 2, 3, 4, 5];
ArraySum(5, arr)