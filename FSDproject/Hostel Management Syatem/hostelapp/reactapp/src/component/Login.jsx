import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message state

  async function sendData(e) {
    e.preventDefault();
    setLoading(true); // Set loading to true
    setError(''); // Reset error message

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch("http://localhost:3005/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await response.json();
    setLoading(false); // Set loading to false

    if (res.msg === "success") {
      navigate(role === 'administrator' ? "/AdminDashboard" : "/StudentDashboard");
    } else {
      setError(res.msg); // Set error message if login fails
    }
  }

  return (
    <div className="login-container">
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
            placeholder="Enter email"
          />
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
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'} {/* Show loading text */}
        </button>
      </form>
    </div>
  );
}

export default Login;