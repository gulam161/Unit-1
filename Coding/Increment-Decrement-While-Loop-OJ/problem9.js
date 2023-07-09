// function oddSumBelowN(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if ((i % 2) !== 0) {
//       sum += i;
//       console.log(i);
//     }
//   }
//   console.log(sum)
// }
// oddSumBelowN(7)


// while loop
function oddSumBelowN(num) {
  let sum = 0;
  let i = 1;
  while (i <= num) {
    if (i % 2 !== 0) {
      sum += i;
    }
    i++
  }
  console.log(sum)
}
oddSumBelowN(7)