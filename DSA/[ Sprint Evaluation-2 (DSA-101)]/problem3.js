// 1.If the count of odd elements in the array is greater than the value stored in K, print "Nice Array", without quotes

// 2. Else, print "Bad Array", without quotes

function niceArrayII(N, array, K) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (array[i] % 2 !== 0) {
      count++
    }
  }
  if (count > K) {
    console.log("Nice Array")
  } else {
    console.log("Bad Array")
  }
}
let array = [1, 2, 3, 4, 5];
niceArrayII(5, array, 2)