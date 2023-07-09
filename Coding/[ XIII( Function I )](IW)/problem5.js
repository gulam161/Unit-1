// Problem 5: Write a function to replace spaces in a given string with - .

function replaceSpaces(str) {
  let temp = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      temp += '-'
    } else {
      temp += str[i]
    }
  }
  console.log(temp)
}
replaceSpaces("This is string")