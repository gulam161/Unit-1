// Write a program to print the sum of all odd numbers between 30 to 40.

function sumOfOdd(num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
      sum += i
    }
  }
  console.log(sum)
}
sumOfOdd(30, 40);