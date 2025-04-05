const http  = require("http")
const PORT = 2021
const fs = require('fs');
const path="user.json"
function readData(path){
    var read = fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("error during reading the file");
        }
        else{
            console.log(data);
        }
    });
    return read;
}

const server=http.createServer((req,res)=>{
    if(req.url=="/user" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end(JSON.stringify(readData('user.json')))
    } 
})
server.listen(PORT,()=>{
    console.log("Server is running on "+PORT)
})