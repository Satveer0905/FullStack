const fs=require('fs').promises;
const pd=fs.writeFile('student.pdf',"CSEB students data");
//console.log(pd);
pd.then(()=>{
    console.log("Data is written Successfully")
})
.catch(()=>{
    console.log("Error ehile writing in file"+err);
})
.finally(()=>{
    console.log("Resources Closed")
})
async function readFilepromise(){
 try{   const data=await fs.readFile('student.pdf',{encoding:'utf-8'})
    console.log(data);
}catch(err){
    console.log("Error while reading the data"+err);
}}
readFilepromise();