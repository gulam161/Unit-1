function subStrUnderCond(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let bag = ''
    for (let j = i; j < s.length; j++) {
      bag += s[j]
      if (substr(bag)) {
        count++
      }
    }
  }
  console.log(count)
}
function substr(bag) {
  if (bag[0] == bag[bag.length - 1]) {
    return true
  }
}
subStrUnderCond('abcab')


////////////////////////////////////////////////////
let temp = 0;
for (let i = 0; i < s.length; i++) {
  for (let j = i; j < s.length; j++) {
    if (s[i] === s[j]) {
      temp++
    }
  }
}
console.log(temp)