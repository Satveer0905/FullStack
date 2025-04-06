import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Registration from './component/Registration';
import Login from './component/Login';
import Home from './component/Home'; 
import Dashboard from './component/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home as the parent route */}
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Route>
        {/* Dashboard as a separate page */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
