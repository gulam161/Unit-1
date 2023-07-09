// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


function abc(user, pass) {
  let input_username = "Gulam_murtuza";
  let input_passWord = 123456;

  if (user === input_username) {
    if (pass === input_passWord) {
      console.log("login successfull")
    } else {
      console.log("incorrect passsword")
    }
  } else {
    console.log("wrong credentials")
  }
}
abc("Gulam_murtuza", 123456)




// function abc(a, b) {
// let input_username = "Gulam_murtuza";
// let input_passWord = 123456;
  
//   if (a === input_username && b === input_passWord) {
//     console.log("user can login")
//   } else {
//     console.log("user can not login")
//   }
// }
// abc("Gulam_murtuza", 123456)