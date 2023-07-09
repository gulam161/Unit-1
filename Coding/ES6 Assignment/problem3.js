// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

// Do this Problem using Arrow function.-------


let lower = "qwertyuiopasdfghjklzxcvbnm";
let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

const lowerCase = (word) => {
  let str = "";
  for (let j = 0; j < word.length; j++) {
    for (let i = 0; i < upper.length; i++) {
      if (word[j] === upper[i]) {
        str += lower[i]
         break;
      }
    }
  }
  return str;
}
// lowerCase()

let input = ["MA", "SA", "I", "SCH", "OOL"];
let output = [];

for (let k = 0; k < input.length; k++) {
  let ans = lowerCase(input[k]);
  output.push(ans)
}
console.log(output)