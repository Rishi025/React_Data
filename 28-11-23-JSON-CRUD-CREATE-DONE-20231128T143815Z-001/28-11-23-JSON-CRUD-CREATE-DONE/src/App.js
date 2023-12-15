import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import EmpList from './EmpList';
import EmpCreate from './EmpCreate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
return(
  <>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpList/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
  </Routes>
  </BrowserRouter>
    
    
  </>
)
 
}

export default App;
