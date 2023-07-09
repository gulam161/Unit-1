function minimumInArray(N, arr) {
  let min = arr[0];
  for (let i = 0; i < N; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  console.log(min)
}
let arr = [1, 2, 3, 4, 5]
minimumInArray(5, arr)