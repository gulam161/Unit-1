function minimumInArray(N, arr) {
  // let max = Math.max(...arr);
  // console.log(max);

  let min = Infinity;
  for (let i = 0; i < N; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  console.log(min);
}
let arr = [1, 2, 3, 4, 5];
minimumInArray(5, arr)


// let find = [1, 2, 3, 4, 5];
// console.log(Math.min(...find));