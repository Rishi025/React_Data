import React from 'react';
import './mystyle.css';
import Home from "./Home"
import App1 from './UsestateEx1';
import UsestateEx2 from './UsestateEx2';

class App extends React.Component {
 
  state = {count:1}

 inc = ()=>{

    // this.setState({count:12})
    // this.setState({count:this.state.count+1})
      // this.setState(()=>(
      //   {count:this.state.count+1}
      // ))

      this.setState((prev)=>(
        {count:prev.count+1}
      ))



  }

  render()
  {
    return (
      <div>
  
      {/* <h1>{this.state.count}</h1>
      <button onClick={this.inc}>Increment</button>
      
      <App1/>
      <UsestateEx2/> */}
     <Home/>
      </div>
    );
  }
}

export default App;
