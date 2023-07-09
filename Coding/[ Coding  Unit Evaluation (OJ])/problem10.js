// You are given a number, stored in a variable with the name num. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored in num

function averageOfSumOfPrimes(num) {
  let sum = 0;
  let count = 0;

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}
let average = averageOfSumOfPrimes(20);

console.log(average);
