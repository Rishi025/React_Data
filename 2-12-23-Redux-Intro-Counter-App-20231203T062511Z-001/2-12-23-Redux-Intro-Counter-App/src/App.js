import { useReducer } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";

const intialState = {count:0}

function App() {
 
const Dispatch = useDispatch();
const selector = useSelector(state => state.count)

  return(<>
  
    <div className="App">
      
      <button onClick={()=>{Dispatch(increment())}}>+ </button>
      {selector}
      <button onClick={()=>{Dispatch(decrement())}}> -</button>
    </div>
  
  </>)

}

export default App;
