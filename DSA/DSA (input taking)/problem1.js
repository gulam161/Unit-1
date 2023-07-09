// boiler plate code with code 
function patternPrinting(N) {
  for (let i = 1; i <= N; i++) {
    let temp = "";
    for (let j = i; j <= N; j++) {
      temp += "*" + "";
    }
    console.log(temp);
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  patternPrinting(n);
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