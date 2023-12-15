import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUsers } from './UserReducer';
import { useNavigate, useParams } from 'react-router-dom';


function EditUser() {

    const {userid} = useParams();
    // console.log(userid)
    const [id,setId] =   useState("");
   
    const users = useSelector(state=>state.users);
  console.log(users)

 const existingUser =  users.filter((user)=>(
    // console.log(user.id)
    user.id == userid
 ))

console.log(existingUser[0])


const {name,email} = existingUser[0];
console.log(name +" " +email)

  const [uname,setuName] =   useState(name);
 const [uemail,setuEmail] =   useState(email);

    const dispatch =  useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (e)=>{

        e.preventDefault();
        dispatch(editUsers({id:userid,name:uname,email:uemail}))
        navigate('/')
    }

  return (
    <div>
        <div className='row justify-content-center text-start'>

        <div className='col-6'>

           <form onSubmit={handleSubmit}className='container'>

            <h1  className='my-5'>EditUser user</h1>

           <div className='col-12'>
                <label className='form-label'>Id</label>
                <input disabled="disabled" className='form-control'></input>
            </div>

            <div className='col-12'>
                <label className='form-label'>Name</label>
                <input value={uname}  onChange={(e)=>{setuName(e.target.value)}} className='form-control'></input>
            </div>

            <div className='col-12'>
                <label className='form-label'>Email</label>
                <input value={uemail}   onChange={(e)=>{setuEmail(e.target.value)}}className='form-control'></input>
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

export default EditUser
