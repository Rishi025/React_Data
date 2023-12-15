import React, { useEffect, useRef } from 'react'

function TriggerScrollEvent() {

    const items = [];
    for(let i=0;i<50;i++)
    {
        items.push(<li>Item {i+1} ..Keep Scrolling..!</li>)
    }

  return (
    <div>

      <ul>
        {items}
      </ul>
    </div>
  )
}

export default TriggerScrollEvent

export function Box()
{
    const divRef = useRef();
  

   
  useEffect(()=>{
    const div = divRef.current;
    const observer = new IntersectionObserver((entries)=>{

        const entry = entries[0];
        if(entry.isIntersecting)
        {
            document.body.style.color = "#fff";
            document.body.style.background="#000"
        }
        else 
        {
            document.body.style.color = "#000";
            document.body.style.background="#fff"
        }
       

    },{
        threshold:.5
    });
    observer.observe(div)
  })

    return(
        <div ref={divRef} style={{
            height:100,
            width:100,
            background:"blue",
            color:"#fff",
            border:"5px solid Gray"
        }}>

        </div>
    )
}

// export default Box;
