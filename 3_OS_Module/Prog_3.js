// fs module with async

const path = require('path');
const fs = require('fs');

const fileName = "fsAsync.txt";

const filePath = path.join(__dirname,fileName);

// fs.writeFile(filePath,"This is init file with async fs","utf-8",
//     (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("File has been Saved");
//         }}
//     )

fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
})

fs.appendFile(filePath,"this is updated data with async fs","utf-8",(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("File updated ");
    }
})

fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
})

fs.unlink(filePath,(err)=>{
    if(err)
        console.log(err)
    else
       console.log("File has been deleted");
})