function modeof10(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 10 != 0) {
      console.log(i);
    }
  }
}
modeof10(11)