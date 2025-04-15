import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Registration from './component/Registration';
import Login from './component/Login';
import Home from './component/Home'; 
import AdminDashboard from './component/AdminDashboard';
import StudentDashboard from './component/StudentDashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          {/* Home as the parent route */}
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Route>
          {/* Dashboard as a separate page */}
          <Route path='/AdminDashboard' element={<AdminDashboard />} />
          <Route path='/StudentDashboard' element={<StudentDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;