function mapCharAndSum(N, K, str) {
  // let sum = 0;
  let obj = {};
  for (let i = 0; i < K; i++, N++) {
    let key = str[i];
    obj[key] = N;
    // sum+=obj[key]
  }
  console.log(obj)
  // for(let i in obj)
  //   sum++
}
mapCharAndSum(30, 3, "abc")



//////////////////////////////////////
function mapCharAndSum(N, K, str) {
  let sum = 0;
  let obj = {};
  for (let i = 0; i < K; i++, N++) {
    let key = str[i];
    obj[key] = N;
    sum = sum + obj[key]
  }
  console.log(sum)
}
mapCharAndSum(30, 3, "abc")