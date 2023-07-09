function patternOfN(N) {
  for (let i = 1; i <= N * N; i = i + N) {
    let temp = '';
    for (let j = i; j < N + i; j++) {
      temp += j + " ";
    }
    console.log(temp)
  }
}
patternOfN(4)