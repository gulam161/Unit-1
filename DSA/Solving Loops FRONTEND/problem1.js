// // Q1. Write a program that prints all numbers between 1 to 10 in reverse order.

// Hint: Starting point is 10, ending point is 1. Figure out the condition based on this.
// Draw the Flowchart and dry-run.
// Bonus: Try printing the output on a sigle line, for example: 10 9 8 7 6 5 4 3 2 


function findReverse(num1, num2){
  for (let i = num1 ; i>=num2 ; i--){
    console.log(i)
  }
}
findReverse(10,1)