// starting [0]index;
// 1 2 3 4 8 7 6 5 9 10 11 12 ;


function traverse2dArray(N, M, matrix) {
  let bag = ""
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      bag += matrix[j][i] + " "
    }
  }
  console.log(bag)
}

let matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
]
traverse2dArray(4, 3, matrix)