import React,{useRef} from 'react'

function UseRefHook() {

    const h1ref = useRef();
    const h1Ref1 = useRef(0);
    
    const getTag = ()=>{
        console.log(h1ref);//h1Ref = {current:h1}
        console.log(h1ref.current);//h1 tag

        h1ref.current.style.color ="blue"
    }

    const getTag1 = ()=>{
        // console.log(h1Ref1)
        // console.log(h1Ref1.current)

        h1Ref1.current = h1Ref1.current + 1

        // console.log(h1Ref1.current)
        // alert(h1Ref1.current)

        // alert(h1Ref1.current)
        document.getElementById('op').innerHTML = h1Ref1.current
    }
    

  return (
    <div>

        <h1 ref={h1ref} onClick={getTag}>Hello</h1>

        <h1 onClick={getTag1} id='op'>{h1Ref1.current}</h1>
      
    </div>
  )
}

export default UseRefHook
