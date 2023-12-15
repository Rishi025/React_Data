import React from 'react'
import Child1Compo from './Child1Compo'
import Child2Compo from './Child2Compo'

function ParentCompo() {
  return (
    <div>

        <h1>Parent</h1>
        <Child1Compo/>
        <Child2Compo/>
      
    </div>
  )
}

export default ParentCompo


