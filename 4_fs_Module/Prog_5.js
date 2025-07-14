// fs using async/await

const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname);

const readFolder = async ()=>{
    try{
        const res = await fs.promises.readdir(filePath);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

readFolder();

const fileName = "fsAsyncAwait.txt";

filePath = path.join(__dirname,fileName)
const writeFile = async ()=>{
    try{
        await fs.promises.writeFile(filePath,"This is init data","utf-8");
        console.log("File created successfully");
    }catch(error){
        console.log(error);
    }
}

writeFile();


const appendFile = async ()=>{
    try{
        await fs.promises.appendFile(filePath,"This is updated data","utf-8");
        console.log("File updated successfully");
    }catch(error){
        console.log(error.message);
    }
}

appendFile();

const ulinkFile = async ()=>{
    try{
        await fs.promises.unlink(filePath);
        console.log("File deleted successfully");
    }catch(error){
        console.log(error);
    }
}

ulinkFile();