// Problem 4: Given 2 numbers a and b print which is greater or "both equal".

// Do this problem using ternary operators-----

function num(a, b) {
  a > b ?  console.log(a, "is greater") : b > a?console.log(b, " is greater") :console.log("both equal")
}
num(20, 20)