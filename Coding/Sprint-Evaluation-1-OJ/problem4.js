 // You are given a numberNstored in a variable with the nameN

// You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added twice


function sumTillNTwice(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i * 2
  }
  console.log(sum);
}
sumTillNTwice(3)