// Problem :- Write a JavaScript function called "calculateArea" that takes two parameters: "length" and "width". The function should calculate and return the area of a rectangle using the given length and width.

let rectangleLength = 5;
let rectangleWidth = 3;
function calculateArea(length, width) {
  var area = length * width;
  return area;
}
let area = calculateArea(rectangleLength, rectangleWidth);
console.log(area);