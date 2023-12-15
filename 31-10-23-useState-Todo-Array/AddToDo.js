import React, { useState } from 'react'

function AddToDo({onAddTodo}) {

    const [title,setTitle] = useState("");

  return (
    <div>

        <input
        value={title}
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        />
        <button onClick={()=>{
            setTitle(""),
            onAddTodo(title)

        }}>Add</button>
      
    </div>
  )
}

export default AddToDo
