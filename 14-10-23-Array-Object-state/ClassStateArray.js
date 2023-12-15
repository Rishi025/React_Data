import React from "react";

class TestStateArray extends React.Component 
{    constructor()
    {
        super();
        this.state = {x : [1,2,3]}
        
    }

    componentDidMount()
    {
        console.log("DID Mount...1")
    }

    changeArray = ()=>{
        this.setState({x: [2,45,"hello"]})
    }
    render()
    {
        return(
            <>               
                {this.state.x[2]}    
                <button onClick={this.changeArray}>Update Array Value</button>

                {/* <h3>{this.state.test[0]}</h3> */}
            </>
        )
    }

    shouldComponentUpdate()
    {
        console.log("Should Update?");
        return true;
    }

    componentDidUpdate()
    {
        console.log("Updated...!")
    }


}


export default TestStateArray;