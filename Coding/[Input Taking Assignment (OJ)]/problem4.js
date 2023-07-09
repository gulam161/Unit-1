// Strings - I

function string(n, str){
    let bag = "";
    for(let i=0; i<n; i++){
        bag+=str[i];
    }
    console.log(bag);
}

function runProgram(input){
    input = input.split('\n');
    let n = +input[0];
    let str = input[1];
    string(n, str);
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
 runProgram("aman")