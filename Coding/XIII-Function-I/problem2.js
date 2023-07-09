// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value.

function abs(one, two){
  let x = one -two
  if(x < 0){
     x = x * -1;
  }  
  return x;
}
console.log(abs(12,4))
console.log(abs(4,18))