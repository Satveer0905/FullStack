import React from 'react'
import './MainLayout.css'
import { Link, Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div><h2>Welcome to the Home page</h2>
    <nav>
    <ul className="aa">
        <li><Link to='/login'>Login</Link ></li>
        <li><Link to='/registration'>Registration</Link ></li>
        <li><Link to='/dash'>Dashboard</Link ></li>
    </ul>
    </nav>
    <Outlet/>
    </div>
  )         
}

export default MainLayout