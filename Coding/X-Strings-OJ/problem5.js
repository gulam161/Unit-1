function checkVowel(N, str) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count++

    }
  }
  if (count != 0) {
    console.log("true")
  } else {
    console.log("false")
  }
}
checkVowel(4, "stvr")