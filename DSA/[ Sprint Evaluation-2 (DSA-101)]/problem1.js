// Binary Matrix

let matrix = [
  [1, 0],
  [0, 1],
  [1, 1]
];

function binaryMatrix(N, M, matrix) {
  for (let i = 0; i < N; i++) {
    let temp = '';
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 1) {
        temp += 0 + " "
      } else {
        temp += 1 + " "
      }
    }
    console.log(temp)
  }
}
binaryMatrix(3, 2, matrix)