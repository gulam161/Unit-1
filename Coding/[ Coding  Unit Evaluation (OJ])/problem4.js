// You are given a number, stored in a variable with the name num. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored in num

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function averageOfSumOfPrimes(num) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}
let average = averageOfSumOfPrimes(13);
console.log(average);
