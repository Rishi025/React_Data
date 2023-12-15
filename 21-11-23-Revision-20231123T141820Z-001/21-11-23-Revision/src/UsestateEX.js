import React from 'react';
import { useState } from 'react';

function UsestateEX() {
    
 const [str,setStr] =  useState("hi");
 const [num,setNum] =  useState(1);
 const [obj,setObj]  = useState({n:0});
 const [arr,setArr]  = useState([1]);
 const [bool,setBool]  = useState(false);

 const [nestedObj,setNestedObj] = useState({
  name:"Rishi",
  address:{
    city:"Ahmedabad",
    area:"CG"
  }
 })
  return (
    <div>

<h1 >Nested Object</h1>
      <h3>Name: {nestedObj.name}</h3>
      <h3>City: {nestedObj.address.city}</h3>
      <h3 onClick={()=>{
        setNestedObj({
          ...nestedObj,
         address:{
          ...nestedObj.address,
          area:"SG"
         }

        })
      }}>Area: {nestedObj.address.area}</h3>
      

<h1 >Boolean :
        <input 
        type='checkbox'
        onChange={(e)=>{setBool(e.target.checked)}}
        
        ></input>
        
         {(bool) ? "hello": "test123"}
       </h1>

      <h1 onClick={()=>{setStr(str + " Deepak")}}>String : {str}</h1>


      <h1 onClick={()=>{setNum(num+1)}}>Number : {num}</h1>

      <h1 onClick={()=>{
        setObj({n:obj.n+1})
      }}>Object : {obj.n}</h1>

      <h1 onClick={()=>{
        setArr([
          ...arr,
          arr[0]=arr[0]+1

        ])
      }}
        >Array : {arr.map((v)=>{
         return(
          <p>{v}</p>
         )
        })}</h1>


     
      
    </div>
  )
}

export default UsestateEX
