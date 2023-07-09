// Problem 1: Create a function to check if a number is Prime or Not

function checkPrime(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  if (count === 0) {
    console.log("Prime")
  } else {
    console.log("Not Prime")
  }
}
checkPrime(11)