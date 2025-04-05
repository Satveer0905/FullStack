import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Registration() {
    async function sendData(e){
     e.preventDefault();
     const name=e.target.name.value;
     const email=e.target.email.value;
     const password=e.target.password.value;
     //alert(name+email+password);

        const response=await fetch("http://localhost:3005/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'}
        })
        const res=await response.json();
        alert(res.msg);
    }
  return (



    <div><h2 style={{backgroundColor:'#03f4fc'}}>Registration</h2>
        <div>
        <form onSubmit={sendData}>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" name="name" required class="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter name" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" required class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>
    </div>
  )
}

export default Registration