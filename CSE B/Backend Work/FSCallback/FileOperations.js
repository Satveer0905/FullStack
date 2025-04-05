const fs=require('fs');
function WriteASynk(){
    try{
fs.writeFile('data.pdf',"Data is wrirren using FS module",(err)=>{
if (err){
    console.log("Error During writing the data");
}else{
    console.log("Data written successfully")
}
});
}catch(err){
    console.log("Error Occured"+err);
}
}
function ReadASynk(){
    try{
fs.readFile('data.pdf',{encoding:'utf-8'},(err,data)=>{
  if (err){
    console.log("Error While rading"+err);
  }  else{
    console.log(data);
  }
})
}catch(err){
    console.log("Error Occured"+err);
}
}

const obj={
    WriteASynk:WriteASynk,
    ReadASynk:ReadASynk
    
}
module.exports=obj;