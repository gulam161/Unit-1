let users = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ageOfUsers = [32, 30, 26, 28, 44];
let arr = [];
for (let i = 0; i < users.length; i++) {
  let name = users[i];
  let age = ageOfUsers[i];
  let obj = {name,age}
  arr.push(obj);
}

for(let obj of arr){  // array of obj
  if(obj.age>30){
    console.log(obj.name);
  }
}

// for(let j=0; j<arr.length; j++){
//   let obj = arr[j];
//   if(obj.age>30){
//     console.log(obj.name);
//   }
// }

