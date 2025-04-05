import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ background: '#f8f9fa' }}>
      <div className="card p-4 shadow-lg rounded-4" style={{ width: '400px', background: '#ffffff' }}>
        <div className="text-center mb-4">
          <img src="https://via.placeholder.com/100" alt="Logo" className="mb-2" />
          <h2 className="text-primary fw-bold">Login</h2>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input className="form-control border-primary" type="text" placeholder="Enter username" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input className="form-control border-primary" type="password" placeholder="Enter password" required />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
          </div>
          <button className="btn btn-primary w-100 py-2">Login</button>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">Don't have an account? <a href="/register" className="text-decoration-none text-primary">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
