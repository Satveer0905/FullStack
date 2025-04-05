import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles. 
function Registration() {

    function sendData(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    alert(name+email+password);

        fetch("http://localhost:3005/register",{
            method: "POST",
            body:{},
            headers:{'Content-Type':'application/json'}

        })
    }
  return (





    <div><h2 style={{backgroundColor:'magenta'}}>Registration</h2>  
    <div>
    <form onSubmit={sendData}> 
    <div class="form-group">
    <label for="name">Name</label>
    <input type="text"  name="name" required class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Enter name"></input>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div> 
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name = "password" required class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
  )
}

export default Registration