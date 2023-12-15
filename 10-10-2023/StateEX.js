import React from 'react'

class StateEX extends React.Component {
    
    constructor()
    {
        super();
        this.state = {
            count : [
                {
                    fname:"Rohit",
                    lname:"Singh",
                    nm: function(){
                        return ( this.lname)
                    }
                },
                {
                    fname:"Rohit",
                    lname:"ABC",
                    nm: function(){
                        return ( this.lname)
                    }
                }
            ]
                // {
                //     fname:"Rohit",
                //     lname:"Singh"
                // }
            
        }
    }

    // inc = ()=>
    // {
    //     this.setState({count:20})
    // }

    // inc = ()=>{
    //     this.setState((p)=>({count:p.count + 2}))
    // }

    // inc = ()=>{
    //     this.setState(()=>({count:this.state.count +1}))
    // }


    // inc = ()=>{
    //     this.setState(()=>({count:this.state.count+2}))
    // }



 render()
 {
    return (
        <div>
            <h1>{this.state.count.map((v)=>(

                // console.log(v.lname)
                <li key={v.lname}>{v.fname}</li>

            ))}</h1>

         
            {/* <button onClick={this.inc}>Change State</button> */}
        </div>
      )
 }
}

export default StateEX
