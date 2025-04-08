import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  // Make the sendData function asynchronous
  async function sendData(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
       
      const res = await response.json();
      // Handle response (optional, like storing the token or redirecting)
      alert(res.msg)
      if (res.msg=="success"){
        navigate("/dashboard");
      }
    
  }

  return (
    <div>
      <h2 style={{backgroundColor:'#03f4fc'}}>Login</h2>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"required className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" required className="form-control" id="exampleInputPassword1" placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login;
