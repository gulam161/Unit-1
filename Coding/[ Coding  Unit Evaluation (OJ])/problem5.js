// You have to solve the equation5*x + 3*y, where x is the number of small case English characters in the string, whileyis the number of upper case English characters in the string.
// _DSA_ solution-

function StringEquation(N, str) {
  let s_case = 'abcdefghijklmnopqrstuvwxyz';
  let u_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let x = 0;
  let y = 0;
  for (let i = 0; i < s_case.length; i++) {
    for (let j = 0; j < N; j++) {
      if (str[j] === s_case[i]) {
        x++
      }
      else if (str[j] === u_case[i]) {
        y++
      }
    }
  }
  let equation = 5 * x + 3 * y
  console.log(equation)
}
StringEquation(5, 'AmanZ')


////////////////////////////////////////////////////////////////
 // _coding_solution-
// function StringEquation(N, str) {
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < N; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       y++;
//     } else {
//       x++;
//     }
//   }
//   console.log((5 * x) + (3 * y));
// }
// StringEquation(5, 'AmanZ')
