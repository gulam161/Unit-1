function checkPalindrome(N, str) {
  let temp = '';
  for (let j = N - 1; j >= 0; j--) {
    temp += str[j];
  }
  if (temp == str) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
checkPalindrome(6, "nrupul")