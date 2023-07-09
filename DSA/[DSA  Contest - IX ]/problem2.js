// Transpose the Matrix
// its diagonal, that is it switches the row and column of the matrix by producing another matrix.

// given an array of n rows and m columns, generate the transpose of the matrix.

let matrix = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4]
]

function transposeTheMatrix(N, M, matrix) {
  for (let j = M - 1; j >= 0; j--) {
    let temp = "";
    for (let i = 0; i < N; i++) {
      temp += matrix[i][j] + " "
    }
    console.log(temp)
  }
}
transposeTheMatrix(5, 4, matrix)