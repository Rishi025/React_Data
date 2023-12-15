import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddToDo from './AddToDo';
import TaskList from './TaskList';
import UseEffectHook from './UseEffectHook';
import UseEffectHook1 from './UseEffectHook1';

function App() {

  let nextId =4;

  const intialtodos = [
    {id:1,title:"Apple"},
    {id:2,title:"Banana"},
    {id:3,title:"Mangos"}
  ];
  const [todos,setTodos] = useState(intialtodos);

  const handleAddTodo = (title)=>{

    setTodos([
      ...todos,
      {
        id: nextId++,
        title:title
      }

    ])

  }



  const handleChangeTodo = (nextTodo)=>{

   setTodos(
    todos.map((t)=>{

      if(t.id === nextTodo.id)
      {
        return nextTodo;
      }
      else 
      {
        return t;
      }

    })
   )
  

  }



  const handleDeleteTodo = (todoId)=>{

 setTodos(
  todos.filter((t)=>{
    return t.id !== todoId;
  }) 
 ) 

  }

  return (
    <div className="App">

{/* <h1>I want an {todos[0].title}</h1> */}
<AddToDo onAddTodo={handleAddTodo}/>
<TaskList 
todos={todos}
onChangeTodo={handleChangeTodo}
onDeleteTodo={handleDeleteTodo}
/>

      {/* <UseEffectHook/> */}

    
    </div>
  );
}

export default App;
