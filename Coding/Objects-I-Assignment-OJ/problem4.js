function mapNumbers(N, K) {
  let obj = {};
  for (let i = 1; i <= N; i++, K++) {
    let key = i;
    obj[key] = K;
  }
  for (let i in obj) {
    console.log(i + '-' + obj[i])
  }
}
mapNumbers(5, 10)