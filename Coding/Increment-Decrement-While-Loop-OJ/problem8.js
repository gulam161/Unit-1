// function evenSumBelowN(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// evenSumBelowN(6)



// while loop
function evenSum(N) {
  let sum = 0; let i = 1;
  while (i <= N) {
    if (i % 2 === 0) {
      sum += i
    }
    i++;
  }
  console.log(sum);
}
evenSum(6);