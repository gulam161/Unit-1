// You have to find the count of 0's ,1's and 2's

function countZerosOnesTwos(N, arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      count0++
    } else if (arr[i] === 1) {
      count1++
    } else if (arr[i] === 2) {
      count2++
    }
  }
  console.log(count0, count1, count2)
}
let arr = [0, 1, 0, 1, 1, 1, 0, 2, 2, 0]
countZerosOnesTwos(10, arr)