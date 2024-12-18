import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration({ regData }) {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[pwd,setPwd]=useState("");
  function getData(e){
      e.preventDefault();
      const data = {
      name,email,pwd
      }
      regData(data);
  }
  return (
    <div><h2>Welcome to Registration Page</h2>
<form>
<div className="form-group">
    <label htmlFor="Name">Name </label>
    <input  onChange={(e)=>{setName(e.target.value)}}type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e)=>{setPwd(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button onClick={getData} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Registration