function divisionTask(N) {
let x = Math.floor(32/N);
  if(x === 0){
    console.log('Low');
  } else if(x === 32/0){
    console.log(-1);
  } else {
    console.log(x);
  }
}
divisionTask(3)