import React, { useReducer } from 'react';

const intialVal = {count:0}

function UseReducerEX() {
    
    const reducer = (prevState,action)=>{
        console.log(prevState)
       console.log(action)
       console.log(action.type)
       if(action.type == "inc")
       {
       return  {count : prevState.count + 1}
       }

       else
       {
        return  {count : prevState.count - 1}
       }

       
    }

    const [state,dispatch] = useReducer(reducer,intialVal)

   
  return (
    <div>

<h1>Count : {state.count}</h1>
        <button  onClick={()=>{dispatch({type:"inc"})}}>+</button>
        <button  onClick={()=>{dispatch({type:"dec"})}}>-</button>
       
    </div>
  )
}

export default UseReducerEX
