import React, { useEffect } from 'react';
import { useState } from 'react';


function UseEffect() {

    // useEffect(()=>{},[])
    const [pos,setPos] = useState({x:0,y:0})
    useEffect(()=>{

      // const h = (e)=>{
      //   setPos({
      //     x:e.clientX,
      //     y:e.clientY
      //   })
      // }

      // window.addEventListener("mousemove",h)

      window.addEventListener("pointermove",(e)=>{
        setPos({
          x:e.clientX,
          y:e.clientY
        })
      })
    })

  return (
    <div style={{
        height:"20px",
        width:"20px",
        background:"blue",
        transform:`translate(${pos.x}px,${pos.y}px)`

    }}>
      
    </div>
  )
}

export default UseEffect
