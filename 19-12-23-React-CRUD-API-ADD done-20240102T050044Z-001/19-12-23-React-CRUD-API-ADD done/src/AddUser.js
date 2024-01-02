import React, { useState } from 'react'

function AddUser({onadd}) {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("")

    const handleClick = (e)=>{
        e.preventDefault();
         onadd(name)
        
    }
  return (
    <div>

      <form onSubmit={handleClick}>
      <div className='formData'>
            <label>Id</label>
            <input disabled="disabled"></input>
        </div>
      
        <div className='formData'>
            <label>Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>

        <div className='formData'>
            <label>Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>

        <div className='formData'>
            
            <input type='submit' value={"Save"}></input>
        </div>

      </form>
        
        

    </div>
  )
}



export default AddUser