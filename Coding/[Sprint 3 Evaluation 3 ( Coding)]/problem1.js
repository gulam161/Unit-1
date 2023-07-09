// You have to solve the equation -5*x + 6*y, where x is the smallest frequency of an element in the array, while y is the largest frequency of an element in the array

function arrayFrequencyEquation(N, arr) {
  let obj = {}
  for (let i = 0; i < N; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++
    }
  }
  // console.log(obj)
  let x = Infinity;
  let y = -Infinity;
  for (let i in obj) {
    if (obj[i] < x) {
      x = obj[i]
    }
    if (obj[i] > y) {
      y = obj[i]
    }
  }
  let equation = 5 * x + 6 * y;
  console.log(equation)
}
let arr = [1, 2, 2, 3, 3, 3, 5]
arrayFrequencyEquation(7, arr)