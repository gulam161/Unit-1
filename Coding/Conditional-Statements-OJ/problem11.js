let word1 = "A";
let word2 = "B";
let word3 = "C";
let word4 = "F";

function printGrade(total) {
  if (total == 100) {
    console.log(word1);
  } else if (total >= 90) {
    console.log(word2);
  } else if (total >= 80) {
    console.log(word3);
  } else {
    console.log(word4);
  }
}
printGrade(80);