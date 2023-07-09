  // Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function odd(num) {
    if (num % 2 != 0) {
      return true;
    }else{
      return false;
    }
}
// let limit = odd(100);
for (let i = 0; i <=100; i++) {
    if (odd(i)) {
        console.log(i, "is odd")
  }else {
      console.log(i,"is even")
  }
}