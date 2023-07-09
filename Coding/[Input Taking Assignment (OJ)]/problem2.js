// Single Line Multiple Integers

function multipleInteger(input){
    for (let i = 0; i<input.length; i++){
        console.log(input[i] + 1)
    }
}

function runProgram(input){
     input = input.split(" ").map(Number); // most imp line 
    // console.log(input)
    multipleInteger(input)
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }
runProgram("1, 2, 3, 4")