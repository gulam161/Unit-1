function vowelAndConsonantCount(N, str) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < N; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count++
    } else if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
      temp++
    }
  }
  console.log(count +' '+ temp);
  // console.log(temp);
}
vowelAndConsonantCount(6, "ankush")