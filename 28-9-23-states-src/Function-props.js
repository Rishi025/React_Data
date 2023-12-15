import React from 'react'

function FunctionProps(props) {

    const testData = [1,2,3,4];
    const myStyle = {color:"red"}

  return (
    <div>
      HELLO FUN PROPS
      <h1>{props.name}</h1>
      {/* <li>{props.name[0]}</li>
      <li>{props.name[1]}</li>
      <li>{props.name[2]}</li> */}
      {/* {props.name.map((v)=>{
        console.log(v)
      })} */}
{testData.map((v)=>{

    return(<li style={myStyle}>{v}</li>)

})}
    
    </div>
  )
}

FunctionProps.defaultProps = {

    name : ["Bhavesh","Jay","Rishi"]

}

export default FunctionProps;
