
const http=require('http');
const fs=require('fs').promises;
const PORT=3005
const server=http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-method','GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');

    if(req.method=="OPTIONS"){
        res.statusCode=200;
        return res.end();
    }


    if(req.url=="/register" && req.method=="POST"){
        try{
        let body='';
        let arr=[];

        req.on('data',chunk=>{
            body+=chunk;
        })

        req.on('end',async()=>{
          const {name,email,password}=JSON.parse(body);
          console.log("Name="+name);
                const data1=await fs.readFile('student.json',{encoding:'utf-8'});
                arr=JSON.parse(data1);
                console.log("data from file:")
                console.log(arr);
                const result=arr.find(ele=>ele.email==email);
               console.log(result);
               if(result){
                console.log("Inside statue true");
                res.setHeader('Content-Type','application/json');
                return res.end(JSON.stringify({msg:"Email is already registerd"}))
               }
         else{
               arr.push({name,email,password});
               console.log(arr);
           fs.writeFile('student.json',JSON.stringify(arr,null,2));
           res.end(JSON.stringify({msg:"User successfully register"}));
         }
           
        })
    }catch(err){
        res.end(JSON.stringify({msg:"Error is:"+err}));
    }
    }

    if(req.url=="/login" && req.method=="POST"){
        try{
        let body='';
        let arr=[];

        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',async()=>{
       console.log(body);
       const {email,password}=JSON.parse(body);
       const data1=await fs.readFile('student.json',{encoding:'utf-8'});
       arr=JSON.parse(data1);
       const result=arr.find(ele=>ele.email==email && ele.password==password);
       if(result){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:"success"}));
       }
       else{
        res.setHeader('Content-Type','application/json');
       res.end(JSON.stringify({msg:"User is invalid"}));
       }
        })
    }catch(err){
        res.end(JSON.stringify({msg:"Error is:"+err}));
    }
    }

   
})

server.listen(PORT,()=>{
    console.log("Serve is running on::"+PORT);
    
})




// const http = require('http');
// const fs = require('fs').promises;
// const PORT = 3005;

// const server = http.createServer(async (req, res) => {


//     if (req.url === "/register" && req.method === "POST") {
//         try {
//             let body = '';

//             req.on('data', chunk => {
//                 body += chunk;
//             });

//             req.on('end', async () => {
//                 const { name, email, password } = JSON.parse(body);
//                 console.log("Name=" + name);

//                 let arr = [];
//                 try {
                    
//                     const data1 = await fs.readFile('student.json', { encoding: 'utf-8' });
//                     arr = JSON.parse(data1); 
//                 } catch (err) {
                    
//                     console.log("Error reading student.json, initializing empty array.");
//                     arr = [];
//                 }

              
//                 const result = arr.find(ele => ele.email === email);

//                 if (result) {
//                     console.log("Email is already registered");
//                     res.setHeader('Content-Type', 'application/json');
//                     return res.end(JSON.stringify({ msg: "Email is already registered" }));
//                 } else {
                    
//                     arr.push({ name, email, password });

//                     console.log(arr); 
//                     try {
                        
//                         await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
//                     } catch (err) {
//                         console.error("Error writing to file:", err);
//                         res.writeHead(500, { 'Content-Type': 'application/json' });
//                         return res.end(JSON.stringify({ msg: "Error writing to student.json" }));
//                     }

//                     res.setHeader('Content-Type', 'application/json');
//                     return res.end(JSON.stringify({ msg: "User successfully registered" }));
//                 }
//             });
//         } catch (err) {
//             console.error("Error:", err);
//             res.writeHead(500, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ msg: "Internal server error" }));
//         }
//     }

//     if (req.url === "/login" && req.method === "POST") {
//         try {
//             let body = '';

//             req.on('data', chunk => {
//                 body += chunk;
//             });

//             req.on('end', async () => {
//                 console.log("Received Data:", body);
//                 const { email, password } = JSON.parse(body);

//                 let arr = [];
//                 try {
//                     const data1 = await fs.readFile('student.json', { encoding: 'utf-8' });
//                     arr = JSON.parse(data1); 
//                 } catch (err) {
//                     console.log("Error reading student.json, initializing empty array.");
//                     arr = []; 
//                 }

               
//                 const result = arr.find(ele => ele.email === email && ele.password === password);

//                 res.setHeader('Content-Type', 'application/json');
//                 if (result) {
//                     return res.end(JSON.stringify({ msg: "User successfully logged in" }));
//                 } else {
//                     return res.end(JSON.stringify({ msg: "Invalid email or password" }));
//                 }
//             });
//         } catch (err) {
//             console.error("Error:", err);
//             res.writeHead(500, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ msg: "Internal server error" }));
//         }
//     }
// });

// server.listen(PORT, () => {
//     console.log("Server is running on port::" + PORT);
// });








// // // const http = require('http');
// // // const fs = require('fs').promises;
// // // const PORT = 3005;

// // // // Creating the server
// // // const server = http.createServer(async (req, res) => {
// // //     if (req.url == "/register" && req.method == "POST") {
// // //         let body = '';
        
// // //         req.on('data', chunk => {
// // //             body += chunk;
// // //         });

// // //         req.on('end', async() => {
// // //             const {name,email,password}=JSON.parse(body);
// // //             let arr=[];
// // //             // console.log("Name"+name);
            
// // //                 const data1=await fs.readFile('student.json',{encoding:'utf-8'})
// // //                 arr=JSON.parse(data1);
// // //                 const status =arr.find(ele => ele.email == email);
// // //                 if (status){
// // //                     res.end(JSON.stringify({msg:"Email is already registered"}))
// // //                 }
// // //                 else{
// // //                     arr.push({name,email,password});
                   
// // //                 }
// // //             //console.log("Received Data:", body);
// // //         });
// // //     } else {
// // //         res.end("404 Not Found");
// // //     }
// // // });

// // // // Start the server
// // // server.listen(PORT, () => {
// // //     console.log(`Server is running on port ${PORT}`);
// // // });

// // // const http=require('http');
// // // const fs=require('fs').promises;
// // // const PORT=3005
// // // const server=http.createServer((req,res)=>{
// // //     if(req.url=="/register" && req.method=="POST"){
// // //         let body='';
// // //         let arr=[];

// // //         req.on('data',chunk=>{
// // //             body+=chunk;
// // //         })
// // //         req.on('end',async()=>{
// // //           const {name,email,password}=JSON.parse(body);
// // //           console.log("Name="+name);
// // //                 const data1=await fs.readFile('student.json',{encoding:'utf-8'});
// // //                 arr=JSON.parse(data1);
// // //                 console.log("data from file:")
// // //                 console.log(arr);
// // //                 const result=arr.find(ele=>ele.email==email);
// // //                console.log(result);
// // //                if(result){
// // //                 console.log("Inside statue true");
// // //                 res.setHeader('Content-Type','application/json');
// // //                 return res.end(JSON.stringify({msg:"Email is already registerd"}))
// // //                }
// // //          else{
// // //                arr.push({name,email,password});
// // //                console.log(arr);
// // //            fs.writeFile('student.json',JSON.stringify(arr,null,2 ));
// // //            res.end(JSON.stringify({msg:"User successfully register"}));
// // //          }
// // //             //console.log(body);
// // //         })
// // //     }

// // //     if(req.url=="/register" && req.method=="POST"){
// // //         let body='';
// // //         let arr=[];
// // //         req.on('data',chunk=>{
// // //             body+=chunk;
// // //             })
// // //             req.on('end',()=>{
// // //                 console.log(body);
// // //                 res.end(JSON.stringify({msg:"Reaching at the end point"}));
// // //             })

// // //     }

// // // })
// // // server.listen(PORT,()=>{
// // //     console.log("Serve is running on::"+PORT);
    
// // // })




// // const http = require('http');
// // const fs = require('fs').promises;
// // const PORT = 3005;

// // const server = http.createServer(async (req, res) => {
// //     if (req.url === "/register" && req.method === "POST") {
// //         try {
// //             let body = '';

// //             req.on('data', chunk => {
// //                 body += chunk;
// //             });

// //             req.on('end', async () => {
// //                 const { name, email, password } = JSON.parse(body);
// //                 console.log("Name=" + name);

// //                 let arr = [];
// //                 try {
// //                     const data1 = await fs.readFile('student.json', { encoding: 'utf-8' });
// //                     arr = JSON.parse(data1);
// //                 } catch (err) {
// //                     console.log("Error reading student.json, initializing empty array.");
// //                     arr = [];
// //                 }

// //                 console.log("Data from file:", arr);
// //                 const result = arr.find(ele => ele.email === email);

// //                 if (result) {
// //                     console.log("Inside status true");
// //                     res.setHeader('Content-Type', 'application/json');
// //                     return res.end(JSON.stringify({ msg: "Email is already registered" }));
// //                 } else {
// //                     arr.push({ name, email, password });
// //                     console.log(arr);
// //                     await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
// //                     res.setHeader('Content-Type', 'application/json');
// //                     return res.end(JSON.stringify({ msg: "User successfully registered" }));
// //                 }
// //             });
// //         } catch (err) {
// //             console.error("Error:", err);
// //             res.writeHead(500, { 'Content-Type': 'application/json' });
// //             res.end(JSON.stringify({ msg: "Internal server error" }));
// //         }
// //     }

// //     if (req.url === "/login" && req.method === "POST") {
// //         try {
// //             let body = '';

// //             req.on('data', chunk => {
// //                 body += chunk;
// //             });

// //             req.on('end', async () => {
// //                 console.log("Received Data:", body);
// //                 const { email, password } = JSON.parse(body);

// //                 let arr = [];
// //                 try {
// //                     const data1 = await fs.readFile('student.json', { encoding: 'utf-8' });
// //                     arr = JSON.parse(data1);
// //                 } catch (err) {
// //                     console.log("Error reading student.json, initializing empty array.");
// //                     arr = [];
// //                 }

// //                 const result = arr.find(ele => ele.email === email && ele.password === password);

// //                 res.setHeader('Content-Type', 'application/json');
// //                 if (result) {
// //                     return res.end(JSON.stringify({ msg: "User successfully logged in" }));
// //                 } else {
// //                     return res.end(JSON.stringify({ msg: "Invalid email or password" }));
// //                 }
// //             });
// //         } catch (err) {
// //             console.error("Error:", err);
// //             res.writeHead(500, { 'Content-Type': 'application/json' });
// //             res.end(JSON.stringify({ msg: "Internal server error" }));
// //         }
// //     }
// // });

// // server.listen(PORT, () => {
// //     console.log("Server is running on port::" + PORT);
// // });
