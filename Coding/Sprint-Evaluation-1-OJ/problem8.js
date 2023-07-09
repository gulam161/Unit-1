function twoPrimes(a, b) {
  let count = 0;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      // count++
      for (let j = 2; i < b; j++) {
        if (b % i === 0) {
          count++
        }
      }
    }
  }
  if (count === 0) {
    console.log("True")
  } else {
    console.log("False")
  }
}
twoPrimes(11, 17)