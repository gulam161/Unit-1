// function calendarDate(date, month) {

//   for (let i = 1; i <= month; i++) {
//     if(i===2){
//       date = 28
//     }
//     else if(i ===4 || i ===6 || i ===9 || i ===11 ){
//       date = 30
//     }else{
//       date = 31
//     }
//     for (let j = 1; j <= date; j++) {
//       console.log( "date - " + j + "  Month-  " + i)
//     }
//   }
// }
// calendarDate(31, 12)


let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function calendarDate(date, month) {
  for (let i = 0; i < month.length; i++) {
    if (month[i] === 'February') {
      date = 28;
    } else if (month[i] === 'April' || month[i] === 'June' || month[i] === 'September' || month[i] === 'November') {
      date = 30;
    } else {
      date = 31;
    }
    for (let j = 1; j <= date; j++) {
      console.log("Month - " + month[i] + "  Date - " + j);
    }
  }
}

calendarDate(31, month);
