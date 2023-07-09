function printHorizontalArray(N, arr) {
  let temp = '';
  for (let i = 0; i <= N - 1; i++) {
    temp += arr[i] + " ";
  }
  console.log(temp)
}
let arr = [1, 2, 3, 4, 5];
printHorizontalArray(5, arr)