import React from 'react'

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ background: "#f0f2f5" }}>
      <div className="card p-5 shadow-lg rounded-4" style={{ width: "400px", background: "#fff" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Create an Account</h2>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input className="form-control border-primary" type="text" placeholder="Enter full name" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input className="form-control border-primary" type="email" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input className="form-control border-primary" type="password" placeholder="Enter password" required />
          </div>
          <button className="btn btn-primary w-100 py-2">Register</button>
          <div className="text-center mt-3">
            <p className="mb-0">Already have an account? <a href="/login" className="text-decoration-none text-primary">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register ;
