function mapChar(N) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let obj = {};
  for (let i = 0; i < N; i++) {
    let key = alpha[i]
    obj[key] = i+1
  }
  for(let i in obj){
    console.log(i+'-'+obj[i]);
  }
}
mapChar(5) 