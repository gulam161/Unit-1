// let sum =0;
// function SumBelowN(N) {
// for(let i = 1 ; i <= N ; i++){
//   sum+= i;
// }
//   console.log(sum);
// }
// SumBelowN(5)


// while loop
function SumBelowN(N) {
  let i = 1;
  let sum = 0;
  while (i <= N) {
    sum += i;
    i++;
  }
    console.log(sum);
}
SumBelowN(5)