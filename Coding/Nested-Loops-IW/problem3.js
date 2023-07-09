function boxPatterns(num) {
  for (let i = 1; i <= num; i++) {
    let str = '';
    for (let j = 1; j <= num; j++) {
      if (i === 1 || i === num ) {
        str += "*";
      } else if (j === 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str)
  }
}
boxPatterns(10);