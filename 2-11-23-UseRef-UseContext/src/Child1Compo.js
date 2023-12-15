import React, { useContext } from 'react'
import { money } from './UseContextHook';

function Child1Compo() {

  const m = useContext(money)
  return (
    <div>

        <h1>Child 1 {m[1]}</h1>
      
    </div>
  )
}

export default Child1Compo


