function reverseArrayTraversal(n, arr) {
  let temp = '';
  for (let i = n - 1; i >= 0; i--) {
    temp += arr[i] + " ";
  }
  console.log(temp);
}
let arr = [1, 2, 3, 4, 5]
reverseArrayTraversal(5, arr)