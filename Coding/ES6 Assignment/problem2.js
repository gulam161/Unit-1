// Write code to calculate the average of an array

// If there are no items in the array it should return 0

// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

// Do this Problem using Arrow Function--------

const avrageOf = (...arr) =>{
 let sum =0;
  
  arr.forEach((elements , index) => {
    sum+=elements;
  })
  let avg = sum/ arr.length;
  if (arr.length == 0){
    return 0
}
  return avg
}
console.log(avrageOf(1,2,3,4,5))