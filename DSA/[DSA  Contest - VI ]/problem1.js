function countSuchPairs(N, K, A) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      if (A[i] + A[j] === K) {
        count++
      }
    }
  }
  console.log(count)
}
countSuchPairs(5, 9, [3, 0, 6, 7, 2]);