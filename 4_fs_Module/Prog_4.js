// fs module with promises

const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";

const filePath = path.join(__dirname,fileName);

fs.writeFile(filePath,"This is the initial Data","utf-8",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("File has been saved")
})
