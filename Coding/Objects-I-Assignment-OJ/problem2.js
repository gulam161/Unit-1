// function mapCharAgain(N) {
//   let alpha = 'abcdefghijklmnopqrstuvwxyz';
//   let obj = {};
//   for (let i = 0; i < N -4; i++) {
//     let key = alpha[i]
//     obj[key] = i + 30
//   }
//   for (let i in obj) {
//     console.log(i + '-' + obj[i]);
//   }
// }
// mapCharAgain(30)

////////////////////////////////////////////////////////
function mapCharAgain(N) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let obj = {};
  for(let i=0; i<alpha.length; i++, N++){
    let key = alpha[i];
    // console.log(key);
    obj[key] = N;
  }
  // console.log(obj)
  for(let i in obj){
    console.log(i+'-'+obj[i]);
  }
}
mapCharAgain(30)