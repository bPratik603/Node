// http module creating server

const http = require('http');

const server = http.createServer((req,res)=>{

      if(req.url === "/"){
         res.setHeader("Content-type","text/html");
         res.write("<h1>This is home page</h1>");
         res.end();
      }else if(req.url === "/source-code"){
         res.setHeader("Content-type","text/plain");
         res.write("This is source code page h");
         res.end();
      }else{
         res.setHeader("Content-type","text/plain");
         res.write("404 page not found");
         res.end();
      }
})

const PORT  = 3000;

server.listen(PORT,()=>{
   console.log("Listening on PORT "+PORT);
})

