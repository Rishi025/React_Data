import React, { useEffect, useState } from 'react'
import "./App.css"  
import AddUser from './AddUser';
function App() {

  const [users,setUsers] = useState([]);


  useEffect(()=>{

    fetchData();
    

  },[])

  const fetchData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
     setUsers(data)
    })
  }

  const xyz = (name)=>{
    fetch("https://jsonplaceholder.typicode.com/users",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({name:name})
    })
    .then((res)=>{return res.json()})
    .then((data)=>{
     setUsers(users=>[...users,data])
    })
// state => state.users
  }

  const LoadDelete = (id)=>{
    // console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method:"delete",
      headers:{"content-type":"application/json"},
      
    })
    .then((res)=>{
      if(res)
      {
        alert("Deleted...!")
      }
    })
    .then(()=>{
     setUsers(users.filter((user)=>(
          user.id !== id
     ))
      
     )
    })

  }


  return (
    <div className='App test'>



<h1>
  Users data
</h1>

<AddUser onadd={xyz}/>
<button >Add new (+)</button>
      <table border={1} cellSpacing={5}>
       <thead>
       <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
       </thead>

       <tbody>

       { users &&
        users.map((items)=>(

        <tr key={items.name}>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td>{items.email}</td>
        <td>
          <button>Edit</button>
          <button onClick={()=>{LoadDelete(items.id)}}>Delete</button>
        </td>
      </tr>
        ))
      }
       
       </tbody>
      </table>

      
    
    </div>
  )
}

export default App