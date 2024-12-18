import './App.css'
// import Card from "./component/Card"
// import State3 from './component/State3'
// import pic from "./images/1.jpg"
// import Colorchange from './component/Colorchange'
// import Rotateimage from './component/Rotateimage'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainLayout from './component/MainLayout';
import Registration from './component/Registration';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { useState } from 'react';
function App() {
  const [store,setStore]=useState("");

  return (
  // <div>{window.location.pathname!='./dash'}
  <div>{JSON.stringify(store)}

        {/* <Card name ="Satveer Singh"
    roll= "9012" img={pic} />
    <Card/>
    <Card/>
    <State3/> */}
    {/* <Colorchange/> */}
    {/* <Rotateimage/> */}
      

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainLayout/>} >
    <Route path="/login" element={<Login regDataLogin={store}/>} />
    <Route path="/registration" element={<Registration 
    regData={setStore}/>} />
    
    </Route>
    </Routes>
    <Routes>
    <Route path="/dash" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}   
export default App