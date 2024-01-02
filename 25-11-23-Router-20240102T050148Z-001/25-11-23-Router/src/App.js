import React from 'react'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import "./App.css";
import About from './About';
import Services from './Services';
import Services1 from './Services1';
import Services2 from './Services2';

function App() {
  return (
    <div className='App'>

     {/* <ul> Routes
      <li> Route
      <a href=''>LINK</a>Link
      </li>

      <li>Service
        <li>service 1</li>
          <li>service 2</li>
            <li>service 3</li>
      
      </li>
     </ul> */}

    

     <BrowserRouter>

     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/services">Service</Link>
    
   
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}>
          <Route path='/services/service1' element={<Services1/>}></Route>
          <Route path='/services/service2' element={<Services2/>}></Route>
       </Route>

        

     
     

     </Routes>
     </BrowserRouter>

   
      
    </div>
  )
}

export default App
