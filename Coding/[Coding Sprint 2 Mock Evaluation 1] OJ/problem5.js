function evenSumAgain(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        sum += j
      }
    }
    console.log(sum)
  }
}
evenSumAgain(4)


// function evenSumAgain(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       sum += i
//     }
//   }
//   console.log(sum)
// }
// evenSumAgain(4)