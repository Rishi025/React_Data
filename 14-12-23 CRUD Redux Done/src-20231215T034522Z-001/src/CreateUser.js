import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from './UserReducer';
import { useNavigate } from 'react-router-dom';


function CreateUser() {

    const [id,setId] =   useState("");
    const [name,setName] =   useState("");
    const [email,setEmail] =   useState("");
    const users = useSelector(state=>state.users);
  console.log(users)

    const dispatch =  useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (e)=>{

        e.preventDefault();
        dispatch(addUsers({id:users[users.length-1].id +1,name,email}))
navigate('/')
    }

  return (
    <div>
        <div className='row justify-content-center text-start'>

        <div className='col-6'>

           <form onSubmit={handleSubmit}className='container'>

            <h1  className='my-5'>Add user</h1>

           <div className='col-12'>
                <label className='form-label'>Id</label>
                <input disabled="disabled" className='form-control'></input>
            </div>

            <div className='col-12'>
                <label className='form-label'>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control'></input>
{name.length == 0 &&    <span className='text-danger'>*Enter Name</span>}
             
            </div>

            <div className='col-12'>
                <label className='form-label'>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>
            </div>

            <div className='col-12'>
                <button className='btn btn-info my-2'>Save</button>
            </div>

           </form>


        </div>
            
        </div>
      
    </div>
  )
}

export default CreateUser
