function areaAndPerimeter(L1, B1, L2, B2) {
  let rectangle1 = L1 + B1;
  let rectangle2 = L2 + B2;

  let perimeter_of_rectangle1 = L1 + B1;
  let perimeter_of_rectangle2 = L2 + B2;

  if (rectangle1 > rectangle2) {
    console.log("false")
  } else if (perimeter_of_rectangle1 > perimeter_of_rectangle2) {
    console.log("false")
  }
}
areaAndPerimeter(1, 2, 2, 3)




  // let rectangle1 = L1 + B1;
  // let rectangle2 = L2 + B2;
  // console.log(rectangle1 > rectangle2)
