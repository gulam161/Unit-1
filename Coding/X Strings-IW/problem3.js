// Given an array of string count the overall total number of characters

let arr = ["This is array"];
function arrOfString(ABC) {
  let count = 0;
  let temp = ' ';
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
  }
  for (let j = 0; j < temp.length; j++) {
    if(temp[j] !== " "){
    count++
    }
    // count++
  }
  console.log(count)
}
arrOfString(arr)