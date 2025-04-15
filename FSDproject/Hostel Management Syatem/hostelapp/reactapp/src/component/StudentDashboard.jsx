import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'; // Import the CSS file

function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting)
    alert("You have been logged out.");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="student-dashboard__container">
      <header className="student-dashboard__header">
        <h1>Welcome to the Student Dashboard</h1>
        <button className="student-dashboard__logout-btn" onClick={handleLogout}>Logout</button>
      </header>
      <div className="student-dashboard__content">
        <h2 className="student-dashboard__heading">Your Information</h2>
        <div className="student-dashboard__info-card">
          <h3>Hostel Details</h3>
          <p><strong>Hostel Name:</strong> ABC Hostel</p>
          <p><strong>Room Number:</strong> 101</p>
          <p><strong>Check-in Date:</strong> 2023-01-15</p>
          <p><strong>Check-out Date:</strong> 2023-12-15</p>
        </div>
        <div className="student-dashboard__info-card">
          <h3>Services</h3>
          <ul>
            <li>Food Services</li>
            <li>Cleaning Services</li>
            <li>Maintenance Requests</li>
          </ul>
        </div>
        <div className="student-dashboard__info-card">
          <h3>Important Notices</h3>
          <p>No visitors allowed after 10 PM.</p>
          <p>Monthly fees are due by the 5th of each month.</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;