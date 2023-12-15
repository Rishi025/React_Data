import { useState } from "react"

function App1()
{
    const [count,setCount] = useState(1);
    const [text,setText] = useState("Hello ");

    const inc = () =>{
        // setCount(12)
        // setCount(count+1)

        // setCount(()=>(
        //     count+1
        // ))

        setCount((prev)=>(
            prev+1
        ))
    }


    const ChangeText = ()=>{
        setText("Dipak")
    }
    

    return(<>
    
        <h1>{count}</h1>
        <button onClick={inc}>Increment</button>

        <h1>{text}</h1>
        <button onClick={ChangeText}>Change Name</button>
    </>)
}

export default App1;