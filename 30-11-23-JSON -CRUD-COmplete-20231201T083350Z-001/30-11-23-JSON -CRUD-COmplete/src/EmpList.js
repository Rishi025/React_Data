import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmpList() {
    const [empData,setEmpData] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
  
      fetch("http://localhost:8000/employee")
      .then((res)=>{return(res.json())})
      .then((data)=>{
        // console.log(data);
        setEmpData(data)
      })
      .catch((err)=>{console.log(err.message)})
    })

    const LoadView = (id)=>{

      console.log(id);
      navigate('/employee/view/'+id)



    }

    const LoadEdit = (id)=>{

      console.log(id);
      navigate('/employee/edit/'+id)
     

    }

    const LoadDelete = (id)=>{

      console.log(id);
      if(window.confirm("Are you sure?"))
      {
        fetch("http://localhost:8000/employee/"+id,{
          method:"DELETE",
          headers:{"content-type":"application/json"},
           body:JSON.stringify(empData)
      })
      .then((res)=>{ 
          // return res.json()

          if(res)
          {
              alert("Deleted successfully..!");
            

          }
      
      
      })
     
        window.location.reload()
      }
     

    }
  
  
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
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={()=>{LoadEdit(item.id)}}  className='btn btn-success me-2'>Edit</button>

                <button onClick={()=>{LoadDelete(item.id)}} className='btn btn-danger me-2'>Delete</button>

                <button onClick={()=>{LoadView(item.id)}} className='btn btn-info'>View</button>
              </td>
            </tr>
  
            ))}
           
  
            
          </tbody>
        </table>
  
      </div>
    );
}

export default EmpList
