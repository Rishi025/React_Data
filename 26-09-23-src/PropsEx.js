import React from 'react'

function PropsEx(props) {

   const x=10;

   const items=[];
    for(let i=0;i<5;i++)
    {
        items.push(<li key={i}> {i+1} Moxit</li>)
    }


  return (
    <div>
        <h1>Prop Example {x}</h1>
        <li>{props.a}</li>
       <li> {props.b}</li>
        <li>{props.c}</li>
        <li><Test xyz="test124"/></li>

        <ul>
        {items}
        </ul>

        {/* <li>List 1</li>
        <li>List 1</li>
        <li>List 1</li>
        <li>List 1</li> */}
      

    </div>
  )
}



PropsEx.defaultProps = {
    a:10,
    b:"hello",
    c:[1,2,3,4]
}

export default PropsEx;


function Test(props)
{

    const x = function t()
    {
        alert("this is alert...!");
        // props.xyz ="hi"
    }

    return(<>
    
    TEST
    {props.xyz}
    <button onClick={x}>Change Me</button>
    
    </>)
}
