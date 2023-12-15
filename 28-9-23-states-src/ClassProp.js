import React from "react";

class Test extends React.Component
{
    constructor()
    {
        super();
        this.state = {count:123}
    }

    inc = ()=>{
        // this.setState({count: "ksjdhf" })
    //   this.setState(()=>({count: "ksjdhf" }))

    this.setState((prev)=>({
        count:prev.count+1
    }))
    }

    dec = ()=>{
        // this.setState({count: "ksjdhf" })
    //   this.setState(()=>({count: "ksjdhf" }))

    this.setState((prev)=>({
        count:prev.count-1
    }))
    }



    render()
    {
        return(
            <>
                CLASS COMPO
                {this.props.name}
              <h1>  {this.state.count}</h1>
              <button onClick={this.inc}>Increment</button>

              <button onClick={this.dec}>Decrement</button>
            </>
        )
    }
}

export default Test;