import React from 'react'
import { useRef } from 'react';

const data = [
    {
      title:"Title 1",
      subtitle:"Subtitle 1"
    },
    {
      title:"Title 2",
      subtitle:"Subtitle 2"
    },
    {
      title:"Title 3",
      subtitle:"Subtitle 3"
    }];



function UseRefHook() {
    const inpRef = useRef();
    const h1Ref = useRef();
    const parentRef = useRef();
   
    const Ele = ()=>{
      console.log(inpRef)
      console.log(h1Ref)
       console.log(inpRef.current)
       console.log(h1Ref.current)
      // console.log(inpRef.current.value)
      console.log(parentRef)
      parentRef.current.style.background = "#000";
      parentRef.current.style.color = "#fff"
    }
  
    return (
      <div className="App">
        
        <input id="t" ref={inpRef} onChange={Ele}/>
        <h1 ref={h1Ref}>Heading 1</h1>
        <p>Para 1</p>
  
        <div className='card'>
  
         
  
          {
            data.map((d)=>{
              return (
              <>
                
              <div className='card-info' ref={parentRef}>
                <h1>{d.title}</h1>
                <p>{d.subtitle}</p>
              </div>
              </>)
  
            })
          }
  
          {/* <div className='card-info'>
            <h1>Title 2</h1>
            <h2>Subtitle 2</h2>
          </div>
  
          <div className='card-info'>
            <h1>Title 3</h1>
            <h2>Subtitle 3</h2>
          </div> */}
  
        </div>
  
      </div>
    );
}

export default UseRefHook
