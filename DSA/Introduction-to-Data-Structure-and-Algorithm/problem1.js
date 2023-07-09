// function sumRelatedOddProblem(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// sumRelatedOddProblem(4)  


///////////////////////////////////////////////////////
// function sumRelatedOddProblem(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// sumRelatedOddProblem(3)



//////////////////////////////////////////////////////
function sumRelatedOddProblem(n) {
  let i = 0;
  let sum = 0;
  while (i <= n) {
    if (i % 2 !== 0) {
      sum += i
    }
    i++
  }
  console.log(sum);
}
sumRelatedOddProblem(3)