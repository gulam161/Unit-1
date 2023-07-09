// Given an array print the position (starting with 1) and the element in a single line.

function position(N, arr) {
  let temp = '';
  for (let i = 1; i <= N; i++) {
    temp += i + ' ';
  }
  console.log(temp)
}
let arr = ['A', 'B', 'C', 'D', 'E'];
position(5, arr)