// You have to modify the string, such that the second half of the string is added to the front, while the first half of the string is to be moved to the back.
// output - anam

// _DSA_solution-

function stringModification(N, str) {
  let first = '';
  let sec = '';
  for (let i = 0; i < N / 2; i++) {
    first += str[i]
  }
  for (let j = N / 2; j < N; j++) {
    sec += str[j]
  }

  let new_str = sec + first
  console.log(new_str)

}
stringModification(4, 'aman')

////////////////////////////////////////////////////////////////
// [coding slution]---------------------------------------------

// function stringModification(N, str) {
//   let half1 = str.substring(0, N / 2);
//   let half2 = str.substring(N / 2);

//   let newStr = half2 + half1;
//   console.log(newStr);
// }
// stringModification(4, 'aman')