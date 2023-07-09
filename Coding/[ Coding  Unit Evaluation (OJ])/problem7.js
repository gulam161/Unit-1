// The string contains characters only from the below symbols,Now every character is mapped to a certain value, such that the mapping starts from 1 and the difference between the values of two characters, is 1. Therefore, the mapping looks as follows,
// You have to find the sum of all characters in the string

function mapSymbolsSum(N, str) {
  let obj = {};
  for (let i = 0; i<N; i++){
      obj[str[i]] = i+1
  }
   let sum = 0; 
   for (let i in obj){
       sum+= obj[i]
   }
  console.log(sum)
}
mapSymbolsSum(4, '!@#$')