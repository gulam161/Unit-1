// function smallestAndLargestOfAll(n, arr){
//   console.log( Math.min(...arr))
//   console.log( Math.max(...arr))
// }
// let arr =[-2, 0, 8, 4]
// smallestAndLargestOfAll(4,arr)



/////////////////////////////////////////////////////

function smallestAndLargestOfAll(n, arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  console.log(min)
  console.log(max)
}
let arr = [-2, 0, 8, 4]
smallestAndLargestOfAll(4, arr)