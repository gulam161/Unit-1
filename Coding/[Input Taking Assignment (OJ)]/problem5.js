// Strings - III 
// String, such that the size of the string is not given

function string(str){
    let bag = ''
    for (let i= 0; i<str.length; i++){
        bag+=str[i]
    }
    console.log(bag)
}

function runProgram(input){
    let str  = input
    string(str)
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
