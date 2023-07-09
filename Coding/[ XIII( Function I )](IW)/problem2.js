// Problem 2: Use the above function to print the Primes from 2 to a given limit

function checkPrime(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  if (count === 0) {
    return true
  }else{
    return false
  }
}
// checkPrime(13)

for (let j = 2; j <= 13; j++) {
    let ans = checkPrime(j);

  
    if (ans == true) {
      console.log(j, "is  Prime")
    }
  }