function areaAndPerimeter(L1, B1, L2, B2) {
  let rectangle1 = L1 * B1;
  let rectangle2 = L2 * B2;
  let perimeter1 = 2*(L1 * B1);
  let perimeter2 = 2*(L2 * B2)
  console.log(rectangle1 > rectangle2)
  console.log(perimeter1 > perimeter2)
}
areaAndPerimeter(1, 2, 2, 3);