function masaiPalSubString(S) {
  //write code here
  let longest = 0;
  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      let bag = ""
      for (let k = i; k <= j; k++) {
        bag += S[k]
      }
      let reverse = ""
      for (let m = j; m >= i; m--) {
        reverse += S[m]
      }
      if (bag === reverse && bag.length > longest) {
        longest = bag.length;
      }
    }
  }
  console.log(longest)
}
masaiPalSubString("thisracecarisgood")