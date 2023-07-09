// function moveTwoAheadII(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i)
//     }
//   }
// }
// moveTwoAheadII(12)



// while loop
function moveTwoAheadII(num) {
  let i = 1;
  while (i <= num) {
    if (i % 2 === 0) {
      console.log(i)
    }
    i++
  }
}
moveTwoAheadII(12)