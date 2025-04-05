import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div><h2 style={{backgroundColor:'magenta'}}>Home</h2></div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
export default Home;
