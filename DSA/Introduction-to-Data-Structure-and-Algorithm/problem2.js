function sumRelatedProblem(N) {
 let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
sumRelatedProblem(4)