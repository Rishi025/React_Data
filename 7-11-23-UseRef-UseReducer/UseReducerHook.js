import React, { useReducer } from 'react'

function UseReducerHook() {

    const reducer = (prevState,action)=>{
        console.log(action);//{name:val}

   if(action.name =="Heena")
   {
    return {count: prevState.count + 1}
   }
   else 
   {
    return {count: prevState.count - 1}
   }

    }
    const [state,dispatch] = useReducer(reducer,{count:1})
  return (
    <div>

        <h1>Reducer</h1>
        <button onClick={()=>{dispatch({name:"Heena"})}}> + </button>
        <h2>{state.count}</h2>
        <button onClick={()=>{dispatch({name:"Dipak"})}}> - </button>
      
    </div>
  )
}

export default UseReducerHook
