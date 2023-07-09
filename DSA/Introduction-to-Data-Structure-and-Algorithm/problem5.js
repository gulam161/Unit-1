function predict_Of(n) {
  let sum = 0;
  let current_num = 0;
  let previous_sum = 0;
  while (current_num <= n) {
    previous_sum = sum;
    sum = current_num + previous_sum;
    // current_num = current_num + 1;
    current_num++
  }
  console.log(sum)
}
predict_Of(7)