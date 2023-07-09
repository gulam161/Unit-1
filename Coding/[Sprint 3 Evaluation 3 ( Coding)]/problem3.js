// You have to find all the vowels that are not present in the string and print them.

let str = 'nature'
let vowels = 'aeiou'
let newArr = []
for (let i = 0; i < vowels.length; i++) {
  if (!str.includes(vowels[i])) {
    newArr.push(vowels[i])
  }
}
console.log(newArr.join(' '))

//////////////////////////////////////////////////////////////
function missingVowel(N, str) {
  //write code here
  let contains = ''
  for (let i = 0; i < N; i++) {
    let match = checkvowel(str[i])
    if (match !== true) {
      contains += str[i]
    } else {
      contains += -1
    }
  }
  // console.log(contains)
}
function checkvowel(word) {
  let vowel = 'aeiou';
  let bag = ''
  for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] === word) {
      // return true
      console.log(vowel[i])
    } else {
      // return false
      // console.log(word)
    }
  }
}