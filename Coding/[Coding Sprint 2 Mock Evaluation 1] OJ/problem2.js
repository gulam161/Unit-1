function theLastDigit(number) {
  let last = number%10;
  if (last%3===0){
    console.log( "Divisible")
  } else{
    console.log("Not Divisible")
  }
}
theLastDigit(126)