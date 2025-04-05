const express=require('express')
const app=express();
const PORT=3005;
app.get("/",(req,res)=>
{
    res.send("Welcome to Express Framework");
})
app.post("/",(req,res)=>{
    res.send("hii,Hitting the message /msg api");
})


app.listen(PORT,()=>{
    console.log("Express is running on port "+PORT);
    })