//Method O(N2)
// let num = 3;
function pattern(num) {
  for (let r = 1; r <= num; r++) {
    let star = '';
    for (let c = 1; c <= r; c++) {
      star += '*' + " ";
    }
   console.log(star)
  }
}
pattern(3)





//Method O(N)

// let num  =5 ;
// let star = '';
// for ( let i = 1; i<= num; i++){
//   console.log('*'.repeat(num))
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let num = 10;
// for (let i = 1; i <= num; i++) {
//   let str = '';
//   for (let j = 1; j <= num; j++) {
//     if (i === 1 || i === num) {
//       str += "*";
//     } else if (j === 1 || j === num) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str)
// }