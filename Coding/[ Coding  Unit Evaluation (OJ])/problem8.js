// You are given an alphanumeric stringA, of length N. print the string that contains all the numbers first, than all the alphabets of that string A, in same order.


function alphanumericStringXIII(N, A){
	let num = '';
	let alpha='';
	 for (let i = 0; i<N; i++){
	     if (isNaN(A[i])){
	         alpha+=A[i]
	     }else{
	         num+= A[i]
	     }
	 }
	 let new_str = num+alpha
	 console.log(new_str)
}
var A = 'a123b'
// var A = '1abc7'
alphanumericStringXIII(5, A)