function stringValue(S) {
  let sum = 0;
  let obj = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alpha.length; i++) {
    obj[alpha[i]] = i + 1;
  }
  for (let j = 0; j < S.length; j++) {
    for (k in obj) {
      if (S[j] === k) {
        sum += obj[k]
      }
    }
  }
  console.log(sum)
}
stringValue("mohsin")