function numberOperation(N, M) {
  let num = N * 40;
  num = num + 20;
  num = num - 50;
  // console.log(num)
  if (num > M) {
    console.log("Greater!");
  } else if (num === M) {
    console.log("Equal!")
  }
  else {
    console.log("Lesser!");
  }
}
numberOperation(5, 10)