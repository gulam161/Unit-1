// You are given an arrayAofNintegers.

// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

function sumOfSpecialPairs(N, A) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (checkPrime(j - i)) {
        sum += Math.abs(A[i] - A[j])
      }
    }
  }
  console.log(sum)
}

function checkPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
sumOfSpecialPairs(6, [1, 2, 3, 5, 7, 12])