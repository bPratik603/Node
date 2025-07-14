// write,read,update,delete,watch on file

const fs = require('fs');
const path = require('path');

const fileName = "demo.txt";
const filePath = path.join(__dirname,fileName);

// const writeFile = fs.writeFileSync(filePath,"this is updated msg","utf-8");
// console.log(writeFile)

const readFile = fs.readFileSync(filePath,"utf-8");
console.log(readFile)

const appendFile = fs.appendFileSync(filePath," This is appended msg","utf-8");
console.log(appendFile);


// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);


// const newupdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname,newupdatedFileName);
// const rename = fs.renameSync(filePath,newFilePath);