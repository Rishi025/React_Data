import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EmpEdit() {
 

    const [id,idChange] = useState("");
    const [name,nameChange] = useState("");
    const [email,emailChange] = useState("");
    const [phone,phoneChange] = useState("");
    const [active,activeChange] = useState(false);

    const navigate = useNavigate()
    const {empId} = useParams();

    useEffect(()=>{

        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{return res.json()})
        .then((data)=>{
         // console.log(data)'
         idChange(data.id)
         nameChange(data.name)
         emailChange(data.email)
         phoneChange(data.phone)
        })
        .catch((e)=>{console.log(e.message)})
    
      },[])


    const handleClick = (e)=>{
        e.preventDefault();

        console.log({id,name,email,phone,active})
        const empData = {name,email,phone,active};

        fetch("http://localhost:8000/employee/"+empId,{
            method:"PUT",
            headers:{"content-type":"application/json"},
             body:JSON.stringify(empData)
        })
        .then((res)=>{ 
            // return res.json()

            if(res)
            {
                alert("Updated successfully..!");
                navigate('/')

            }
        
        
        })
        .then((data)=>{
            console.log(data);
            // console.log(data.name);

            //  idChange(data.id)
            // nameChange(data.name)
            // emailChange(data.email)
            // phoneChange(data.phone)
            // activeChange(data.active)
        })
        .catch((e)=>{console.log(e.message)})
    }
  return (
    <div>

        <div className='row justify-content-center'>
            <div className='col-6'>
            <h3 className='my-3 ms-2'>Edit Employee</h3>

               <form className='container' onSubmit={handleClick}>

               
               <div className='col-12'>
                    <label className='form-label'>Id</label>
                    <input value={id} disabled="disabled" className='form-control'></input>

                </div>

                <div className='col-12'>
                    <label className='form-label'>Name</label>
                    <input value={name} onChange={(e)=>{nameChange(e.target.value)}} className='form-control'></input>

                </div>

                <div className='col-12'>
                    <label className='form-label'>Email</label>
                    <input  value={email} onChange={(e)=>{emailChange(e.target.value)}} className='form-control'></input>

                </div>

                <div className='col-12'>
                    <label className='form-label'>Phone</label>
                    <input  value={phone} onChange={(e)=>{phoneChange(e.target.value)}} className='form-control'></input>

                </div>

                <div className='col-12'>

                <input  value={active} onChange={(e)=>{activeChange(e.target.checked)}} type='checkbox' className='form-check-input'></input>{" "}
                    <label className='form-check-label'>Is Active</label>
                   

                </div>

                <div className='col-12 mt-2'>
                    <button type='submit' className='btn btn-success me-2'>Save</button>
                    <Link to="/" className='btn btn-info'>Back</Link>

                </div>


               </form>
            </div>

        </div>
      
    </div>
  )
}


export default EmpEdit
