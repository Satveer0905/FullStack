const fs=require('fs');
function writeData(){
try{
fs.writeFileSync('data.txt',"Welcome To Node Js Fs Module");
console.log("Data is Written Successfully");
}catch(err){
    console.log("Error Occured"+err);
}
}

function readData(){
    try{

const frd=fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(frd);}
catch(err){
    console.log("Error Occured during reading"+err);
}}



function dataAppend(){
try{
fs.appendFileSync('data.txt'," Hi Data Is Appended using FS Module");
console.log("Data Is appended Successfully");
}catch(err){
    console.log("Data append successfully")
}
}

function dataDelete(){
    try{
fs.unlinkSync('data.txt');
console.log("File is deleted Successfully");
    }catch(e){
        console.log("Error occured during delition"+e);
    }}

    const obj={
        writeData:writeData,
        readData:readData,
        dataAppend:dataAppend,
        dataDelete:dataDelete
        
    }
    module.exports=obj;