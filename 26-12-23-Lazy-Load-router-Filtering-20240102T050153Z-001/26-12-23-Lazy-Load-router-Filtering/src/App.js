import logo from './logo.svg';
import './App.css';
// import Admin from './Admin';
// import User from './User';
// import NoPage from './NoPage';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { userData } from './Data';

const Admin = React.lazy(()=>import('./Admin'));
const User = React.lazy(()=>import('./User'));
const NoPage = React.lazy(()=>import('./NoPage'));



function App() {

  const [search,setSearch] = useState("") 
  // const [users,setusers] = useState([])

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((res)=>{return res.json()})
  // .then((data)=>{
  //   setusers(data)
  // })
  return (
    <div className="App">

      {/* {users.map(items =>(

        <li key={items.id}>{items.username}</li>
      ))} */}
      <input value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}></input>

     {userData.filter(items=> items.username.toLowerCase().startsWith(search))
     
     .map(items=>(
       <li key={items.id}>{items.username}</li>
     ))}

      {/* <BrowserRouter>

      <Link to="/">Admin</Link> {" "}
      <Link to="/user">User</Link> {" "}
      <Link to="/nopage">NoPage</Link>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<>...Loading...TEXT--Number--Animation-Image-Component ..!</>}>
          <Admin/>
        </React.Suspense>


        }></Route>


        <Route path='/user' element={
          <React.Suspense fallback={<>
          
          <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif' height={150}></img>
          </>}>
          <User/>
        </React.Suspense>
        }></Route>

<Route path='/nopage' element={
         
    <React.Suspense fallback={<>...Loading NOPAGE...!</>}>
    <NoPage/>
  </React.Suspense>
        }></Route>

      </Routes>
      </BrowserRouter> */}
      {/* <React.Suspense fallback={<>...Loading...TEXT--Number--Animation-Image-Component ..!</>}>
        <Admin/>
      </React.Suspense>
    
    <React.Suspense fallback={<>...Loading user...!</>}>
      <User/>
    </React.Suspense>


    <React.Suspense fallback={<>...Loading NOPAGE...!</>}>
      <NoPage/>
    </React.Suspense> */}
    
    </div>
  );
}

export default App;
