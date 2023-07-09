// Problem 4: Write a function to check if the char is a small case or not.

let lower = "qwertyuiopasdfghjklzxcvbnm";
let pre = false;
function check(char) {
  for(let i = 0; i < lower.length; i++){
    if(char === lower[i]){
      pre = true;
      break;
    }
  }
  return pre;
}
let ans = check("r");
if (ans == true){
      console.log("is Present")
  }else{
      console.log("not Present")
    }