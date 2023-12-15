import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpView() {

  const {empId} = useParams();
  console.log(empId);
  const [empData,setEmpData] = useState("");

  useEffect(()=>{

    fetch("http://localhost:8000/employee/"+empId)
    .then((res)=>{return res.json()})
    .then((data)=>{
     // console.log(data)'
     setEmpData(data)
    })
    .catch((e)=>{console.log(e.message)})

  })

  
  return (
    <div>
      <h4>Id:  {empData.id}</h4>
      <h4>Name:  {empData.name}</h4>
      <h4>Email: {empData.email}</h4>
      <h4>Phone:  {empData.phone}</h4>
      <h4>Active User:  {(empData.active)? "YES" : "NO"}</h4>

      
    </div>
  )
}

export default EmpView
