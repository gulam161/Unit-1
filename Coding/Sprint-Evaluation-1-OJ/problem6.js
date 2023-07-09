function evenCollection(max, min) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
      sum += i
    }
  }
  console.log(sum)
}
evenCollection(19, 13)