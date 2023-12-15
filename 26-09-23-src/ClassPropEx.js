import React from 'react'

class ClassPropEx extends React.Component
{


    render()
    {
        return(
            <>
            test123
           
            {this.props.name}
            {this.props.age}
            {this.props.course}
            <ClassPropEx1 name="xyz"/>
            </>
        )
    }
}

export default ClassPropEx;


class ClassPropEx1 extends React.Component
{

    render()
    {
        return(
            <>
           <h3> THIS IS CHILD COMPO</h3>
           USername : {this.props.name}            
            </>
        )
    }
}