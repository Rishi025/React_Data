import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function EmpList() {
    const [empData,setEmpData] = useState("")

    useEffect(()=>{
  
      fetch("http://localhost:8000/employee")
      .then((res)=>{return(res.json())})
      .then((data)=>{
        console.log(data);
        setEmpData(data)
      })
      .catch((err)=>{console.log(err.message)})
    })
  
  
    return (
      <div className='container text-center'>
  
  <h3 className=' m-3'>Employee Details</h3>
  
      <Link to='employee/create' className='btn btn-warning m-3'>Add New (+) </Link>
        <table className='table'>
          <thead className='table-dark'>
          <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
  
            {empData && empData.map((item)=>(
              // console.log(item.name);
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button className='btn btn-success me-2'>Edit</button>
                <button className='btn btn-danger me-2'>Delete</button>
                <button className='btn btn-info'>View</button>
              </td>
            </tr>
  
            ))}
           
  
            
          </tbody>
        </table>
  
      </div>
    );
}

export default EmpList
