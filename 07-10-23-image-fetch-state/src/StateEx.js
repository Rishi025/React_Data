import React from 'react';

class StateEx extends  React.Component 
{

    constructor()
    {
        super();
        this.state={count :0}
    }
   
        
    inc =  () =>
    {
        this.setState((prev)=>(
            {count:prev.count+1}
        ))
    }
    
    render()
    {
        

      
        return(
            <>
            {this.state.count}
            <button onClick={this.inc}>Inc</button>
            </>
        )
    }
}

export default StateEx;