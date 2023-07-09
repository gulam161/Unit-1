function detectPalindrome(num) {
  let str = '';
  str = str + num;
  let temp = "";
  for (let i = str.length -1 ; i >= 0; i--) {
    temp += str[i];
    // console.log(temp)
  }
  if (temp == num) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
detectPalindrome(1221)