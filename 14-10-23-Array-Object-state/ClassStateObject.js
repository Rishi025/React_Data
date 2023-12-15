import React from "react";
import TestStateArray from "./ClassStateArray";

class TestState extends React.Component 
{    constructor()
    {
        super();
        this.state = {count : {n:1}}
        
    }
    changeArray = ()=>{
        this.setState({count : {n:"hello"}})
    }
    render()
    {
        return(
            <>               
                {this.state.count.n}    
                <button onClick={this.changeArray}>Update Array Value</button>

                {/* <h3>{this.state.test[0]}</h3> */}

                <TestStateArray/>   
            </>
        )
    }
}


export default TestState;