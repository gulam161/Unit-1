// function equalTo42(n,arr) {
// let num = 42;
// if (arr.includes(num)){
//   console.log("Yes")
// }else{
//   console.log("No")
// }
// }
// let arr =[3, 7, 0, 9, 8];
// equalTo42(5 , arr)


//////////////////////////////////////////////////////
function equalTo42(n, arr) {
  let check = false;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 42) {
      check = true;
    }
  }
  if (check === true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
let arr = [3, 7, 0, 9, 8];
equalTo42(5, arr)