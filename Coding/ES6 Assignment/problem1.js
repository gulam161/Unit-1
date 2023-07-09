// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

//Do this using Arrow Function------

 let isOdd  = (num)=> {
  if(num% 2 !==0){
    return true
  }
  return false
}
  for (let i = 0; i <=50; i++) {
    let ans = isOdd(i)
    if (ans === true) {
        console.log(i, "is odd")
  }else {
      console.log(i,"is even")
  }
}


// function isOdd(num){
//   for (let i = 1; i <=num; i++){
//     if(i%2!==0){
//        console.log(i, "is odd")
//   }else {
//       console.log(i,"is even")
//    }
//   }
// }
// isOdd(50)