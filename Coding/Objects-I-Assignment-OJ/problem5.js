// function mapSymbols(N) {
//   let obj = {}
//   let symbol = ['!', '@', '#', '$', '%', '^', '&', '*']
//   for (let i = 0; i < symbol.length; i++, N++) {
//     let key = symbol[i];
//      // console.log(key)
//     obj[key] = N;
//   }
//   // console.log(obj)
//     for (let i in obj){
//       console.log(i,'-',obj[i])
//     }
// }
// mapSymbols(20)

function mapSymbols(N) {
  let sym = "!@#$%^&*";
  let obj = {};
  // for(let i=0; i<sym.length; i++){
  //   let key = sym[i]
  //   obj[key] = N;
  //   N = N+2;
  // }
  // console.log(obj);
  let i=0;
  while(i<sym.length){
    let key = sym[i];
    obj[key] = N;
    N+=2;
    i++;
  }
  // console.log(obj);
  for (let i in obj){
    console.log(i,'-',obj[i])
  }
}
mapSymbols(20)