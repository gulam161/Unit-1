function divisibleBy(x) {
  if (x % 6 === 0) {
    console.log("Divisible by 6")
  } else if (x % 5 === 0) {
    console.log("Divisible by 5 ")
  } else if (x % 3 === 0) {
    console.log("Divisible by 3")
  } else {
    console.log("404 Not Found")
  }
}
// divisibleBy(25)
divisibleBy(18)
// divisibleBy(9)

// X=25, X=18, X=9