function compareSevenNumbers(a, b, c, d, e, f, g) {
  let sum1 = (a + b) * c;
  let sum2 = (d + e + f + g);
  let compare = sum1 > sum2;
  console.log('sum2 is greater than sum1 hence the output ' + compare);
}
compareSevenNumbers(1, 2, 3, 4, 5, 6, 7);
