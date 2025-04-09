import React from 'react';
import './AdminDashboard.css'; // Import the CSS file

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Hostel Management System</h1>
        <nav className="dashboard-nav">
          <ul>
            <li>Dashboard</li>
            <li>Students</li>
            <li>Rooms</li>
            <li>Maintenance</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="card">
          <h2>Total Students</h2>
          <p>150</p>
        </section>
        <section className="card">
          <h2>Available Rooms</h2>
          <p>20</p>
        </section>
        <section className="card">
          <h2>Maintenance Requests</h2>
          <p>5 Pending</p>
        </section>
        <section className="card">
          <h2>Recent Activities</h2>
          <ul>
            <li>Room 101 assigned to John Doe</li>
            <li>Maintenance request for Room 202</li>
            <li>New student registered: Jane Smith</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;