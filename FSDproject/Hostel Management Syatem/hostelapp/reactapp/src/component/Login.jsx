import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role

  // Make the sendData function asynchronous
  async function sendData(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch("http://localhost:3005/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role }), // Include role in the request
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await response.json();
    // Handle response (optional, like storing the token or redirecting)
    alert(res.msg);
    if (res.msg === "success") {
      navigate(role === 'administrator' ? "/admin-dashboard" : "/student-dashboard");
    }
  }

  return (
    <div className="login-container"> {/* Add a specific class here */}
      <h2 id="loginHeading">Login</h2>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control"
          >
            <option value="student">Student</option>
            <option value="administrator">Administrator</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;