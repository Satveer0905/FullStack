const http=require('http');
const PORT=2021;
const server=http.createServer((req,res)=>{
    req.setHeader('content.Type',"text/html")
    res.end("<h2>Welcome to ABES Engineering Collage</h2>");
    
})
server.listen(PORT,()=>{
    console.log("Server is running on port no: "+PORT);
})