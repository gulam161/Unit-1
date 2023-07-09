function averageOfAll(n, arr){
  let sum =0;
  let count =0 ;
for (let i = 0; i< n; i++){
  sum+=arr[i]
  count++
}
  let total = sum/count ;
  console.log(total)
}
let arr = [2,5,0,9]
averageOfAll(4,arr)