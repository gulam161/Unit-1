function applyBasicMaths(N, A) {
  let elem = Infinity;
  let index = -1;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (i != j) {
        sum += A[j]
      }
    }

    if (sum % 7 == 0 && A[i] < elem) {
      elem = A[i]
      index = i
    }
  }
  // console.log(index)
}
applyBasicMaths(5, [14, 7, 8, 2, 4])


// /////////////////////////////////////////////////////////////
function applyBasicMaths(N, A) {
  /* let elem = Infinity; */
  let index;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (i != j) {
        sum += A[j]
      }
    }

    if (sum % 7 == 0) {
      /* elem = A[i] */
      index = i
    }
  }
  console.log(index)
}
applyBasicMaths(5, [14, 7, 8, 2, 4])