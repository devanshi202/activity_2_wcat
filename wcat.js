let fs = require("fs");
let sObj = require("./command/-s");

let inputArr = process.argv.slice(2);
let commandArr =[];
let pathArr= [];
for(let i=0; i<inputArr.length; i++){
    if(inputArr[i].charAt(0)=="-"){
        commandArr.push(inputArr[i]);
    }else{
        pathArr.push(inputArr[i]);
    }
}
let data="";
for(let i=0; i<pathArr.length; i++){
     data += ""+fs.readFileSync(pathArr[i])+"\r\n";
}
    sObj.fxn(data , commandArr);
