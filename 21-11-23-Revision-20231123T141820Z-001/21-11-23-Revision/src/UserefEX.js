import React, { useRef } from 'react';

const data = [
    {
        title:"Title 1",
        subtitle:"Subtitle 1"
    },
    { title:"Title 2",
    subtitle:"Subtitle 2"},
    { title:"Title 3",
    subtitle:"Subtitle 3"}
]

function UserefEX() {
    const moxit = useRef();
    const divRef = useRef([]);
    divRef.current = [];

    const addRef = (ele)=>{

        console.log(ele)

    }

    console.log(divRef.current)

    console.log(moxit)
    console.log(moxit.current)
    const ApplyColor  =()=>{
        moxit.current.style.color ="red"
        divRef.current.style.color ="blue"
    }
  return (
    <div>
        <h1 onClick={ApplyColor} ref={moxit}>Hello</h1>

      {/* <div  ref={divRef}> */}
        {
            data.map((item)=>{
             return(
                <div ref={addRef}>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
            </div>
             )
            })
        }
        {/* </div> */}

        {/* <div>
            <h1>Title 2</h1>
            <p>Subtitle 2</p>
        </div>

        <div>
            <h1>Title 3</h1>
            <p>Subtitle 3</p>
        </div> */}
      
    </div>
  )
}

export default UserefEX
