// Single Array

//Enter code here
function singleArray(n, arr) {
  let bag = ''
  for (let i = 0; i < n; i++) {
    bag += arr[i] + 1 + " "
  }
  console.log(bag)
}

function runProgram(input) {
  input = input.split('\n');// most imp line 
  let n = + input[0]
  let arr = input[1].split(' ').map(Number) // imp
  singleArray(n, arr)

}
if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
    read += input;
  });
  process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
runProgram("5,[1,2,3,4,5]")