// Given a string swap the case and print the output.
function swap(word) {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let temp = "";
  for (let j = 0; j < word.length; j++) {
    for (let i = 0; i < upper.length; i++) {
      if (word[j] == upper[i]) {
        temp += lower[i]
      }
      if (word[j] == lower[i]) {
        temp += upper[i]
      }
    }
  }
  console.log(temp)
}
swap("Test")