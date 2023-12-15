import React from 'react';
import { useState } from 'react'

function NestedObj() {
 
    const [data,setData] = 
  useState({
    name:"Heena",
    age:22,
    address: {
      city:"Ahmedabad",
      area:"CG"
    }
  })

  // const ChnageAge = ()=>{
  //   setData({
      
  //     age:data.age+1
  //   })
  // }



  return (
    <div>
      <input value={data.name} onChange={(e)=>{
        setData({
          ...data,
          name:e.target.value
        })
      }}/>

       <h1>{data.name}</h1>
       <h1 onClick={()=>{setData(
        {
          ...data,
          age:data.age+1
        }
       )}}>{data.age}</h1>
      

      
    </div>
  )
}

export default NestedObj
