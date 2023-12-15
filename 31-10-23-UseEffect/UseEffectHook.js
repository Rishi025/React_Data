import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [pos,setPos] = useState({x:0,y:0})

    // useState(x)
    // useState(str)
    // useEffect(()=>{})
    // useEffect(()=>{},[])
    // useEffect(()=>{},[x,"hi",str,4])

    // const h = (e)=>{
    //     setPos({
    //         x:e.clientX,
    //         y:e.clientY
    //     })
    // }

    // window.addEventListener("mousemove",h)

    useEffect(()=>{

        const h = (e)=>{
            setPos({
                // x:e.clientX,
                // y:e.clientY

                // x:e.screenX,
                // y:e.screenY

                x:e.pageX,
                y:e.pageY
            })

            console.log(e)
        }
    
        window.addEventListener("mousemove",h)
    })

  return (
    <div style={{
        height:20,
        width:20,
        backgroundColor:"blue",
        transform:`translate(${pos.x}px,${pos.y}px)`,
        position:"absolute",
        top:-10,
        left:-10,
        borderRadius:"50%"
    }}>
      
    </div>
  )
}

export default UseEffectHook
