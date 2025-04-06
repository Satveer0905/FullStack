import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Registration.css'; // Make sure to import your CSS file

function Registration() {
    const [userType, setUserType] = useState('student'); // State to hold the user type

    async function sendData(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await fetch("http://localhost:3005/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password, userType }), // Include userType in the request
            headers: { 'Content-Type': 'application/json' }
        });
        const res = await response.json();
        alert(res.msg);
    }

    return (
        <div className="registration-wrapper"> {/* Wrapper for the registration form */}
            <div className="registration-container"> {/* Container for styling */}
                <h2 id="registrationHeading">Registration</h2>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label>User Type:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="student"
                                    checked={userType === 'student'}
                                    onChange={() => setUserType('student')}
                                />
                                Student
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="administrator"
                                    checked={userType === 'administrator'}
                                    onChange={() => setUserType('administrator')}
                                />
                                Administrator
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputname">Name</label>
                        <input type="text" name="name" required className="form-control" id="exampleInputname" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" required className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" required className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;