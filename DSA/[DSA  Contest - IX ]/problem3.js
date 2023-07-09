// Rotate By 90
// Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

function rotateBy90(R, matrix) {
  for (let j = R - 1; j >= 0; j--) {
    let temp = '';
    for (let i = 0; i < R; i++) {
      temp += matrix[i][j] + " "
    }
    console.log(temp)
  }
}
rotateBy90(4, matrix)