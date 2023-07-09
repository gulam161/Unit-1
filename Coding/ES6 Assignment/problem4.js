// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

const swap= (word)=> {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let temp = "";
  for (let j = 0; j < word.length; j++) {
    for (let i = 0; i < 26; i++) {
      if (word[j] == upper[i]) {
        temp += lower[i]
      } else if (word[j] == lower[i]) {
        temp += upper[i]
      }
    }

  }
  console.log(temp)
}
swap("Test")