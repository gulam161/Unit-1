// Given a matrix print it in the form of a snake

// let r = N;
// let c = M;

function traverse2dArray(N, M, matrix) {
    let bag = ""
  for (let i = 0; i < N; i++){
    if (i%2===0){
     for (let j = 0; j< M; j++) {
         bag += matrix[i][j]+" "
      }
    }
    else if (i%2!==0){
      for (let k= M-1; k>=0; k--){
        bag += matrix[i][k]+" "
       }
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