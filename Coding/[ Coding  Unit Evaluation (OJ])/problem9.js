// You have to find the sum of matrix and printtrueorfalsebased on weather thatsumisprimeor not.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function matrixSumPrimeCheck(N, M, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += arr[i][j]
    }
  }
  let count = 0;
  for (let j = 2; j < sum; j++) {
    if (sum % j === 0) {
      count++
    }

  }
  if (count === 0) {
    console.log("true")
  } else {
    console.log("false")
  }
}
matrixSumPrimeCheck(3, 3, arr)