const http=require('http');
const port=2021;
const server=http.createServer(async(req,res)=>{
    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2>Hi, good day</h2>");
    }

if(req.url=="/msg" && req.method=="POST"){
    res.setHeader('Content-Type',"application/json");
    res.end(JSON.stringify({
        msg:"Successfully hit api"
    }));
}
    if(req.url=="/" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2 style=color:red>WELCOME ABES</h2>");
    }

    if(req.url=="/msg" && req.method=="DELETE"){
        res.setHeader('Content-Type','text/html')
        res.end(JSON.stringify({msg:"Resource deleted successfully"}));
    }
   // console.log(object.keys(req));
//    console.log("Request URL="+req.url+"Request method:"+req.method);
//     res.write("<h2>welcome</h2>");
   // res.end("End");
})
server.listen(port,()=>{
    console.log("Running"+port);
})