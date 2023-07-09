// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
function toLower(word) {
  let temp = ""
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j<upper.length; j++){
      if (word[i] === upper[j]){
        temp+=lower[j]
        break;
      }
    }
    }
  return temp;
}
// console.log(toLower("MOHSIN"))

let input =  ["MA", "SA", "I", "SCH", "OOL"]
let output = [];

for (let k =0; k< input.length; k++){
  let ans = toLower(input[k])
  output.push(ans)
}

console.log(output)