// Even Product in Columns.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function evenProductInColumns(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let prod = 1;
    for (let j = 0; j < M; j++) {
      if (arr[j][i] % 2 === 0) {
        prod *= arr[j][i]
      }
    }
    console.log(prod)
  }
}
evenProductInColumns(3, 3, arr)