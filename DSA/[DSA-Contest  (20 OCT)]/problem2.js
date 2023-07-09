// Write a program that returns length of the longest palindromic substring of that string.

// function masaiPalSubString(S) {
//   let maxLength = 0;
//   for (let i = 0; i < S.length; i++) {
//     for (let j = i; j < S.length; j++) {
//       let flag = 1;
//       for (let k = 0; k < (j - i + 1) / 2; k++) {
//         if (S[i + k] != S[j - k]) {
//           flag = 0;
//         }
//       }
//       if (flag !== 0 && (j - i + 1) > maxLength) {
//         maxLength = j - i + 1;
//       }
//     }
//   }
//   console.log(maxLength);
// }
// masaiPalSubString("thisracecarisgood")


/////////////////////////////////////////////////////////
function masaiPalSubString(S){
    let n=S.length;
    let longst=0;
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
//we know that ""i" is starting point and
//"j" is ending point
             let bag="";
             for(let k=i; k<=j; k++){
                 bag=bag+S[k];
             }
             let reverseBag="";
             for(let k=j; k>=i; k--){
                 reverseBag=reverseBag+S[k];
             } if(bag==reverseBag && bag.length>longst){
                 longst=bag.length;
             }
             
        }
    }
    console.log(longst);
}
masaiPalSubString("thisracecarisgood")