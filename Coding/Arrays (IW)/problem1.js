// Given an array print the position (starting with 1) and the element in a single line.

function position(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i])
  }
}
let arr = ['A', 'B', 'C', 'D', 'E'];
position(arr)