// function moveTwoAhead(num) {
//   for (let i = 1;  i <= num ; i++) {
//     if (i % 2 !== 0)
//       console.log(i)
//   }
// }
// moveTwoAhead(13)


// while loop
function moveTwoAhead(num) {
  let i = 1;
  while (i <= num) {
    if (i % 2 != 0) {
      console.log(i);
    }
    i++;
  }
}
moveTwoAhead(13)