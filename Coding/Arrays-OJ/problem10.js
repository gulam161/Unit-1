// function maximumInArray(N, arr) {
//   let max = 1;
//   for (let i = 1; i <= N; i++) {
//     if (arr[i] >= max){
//       max = arr[i]
//     }
//   }
//   console.log(max);
// }
// let arr = [1, 2, 3, 4, 5];
// maximumInArray(5, arr)




/////////////////////////////////////
function maximumInArray(N, arr) {
let max = Math.max(...arr);
  console.log(max)
}
let arr = [1, 2, 3, 4, 5];
maximumInArray(5, arr)