// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function checkPrime(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count++
    }
  }
  if (count == 0) {
    return true
  } else {
    return false
  }
}
// checkPrime(11)

for (let j = 2; j <= 25; j++) {
  let temp = checkPrime(j);

  if (temp == false) {
    console.log(j, "is Non Prime")
  }
}