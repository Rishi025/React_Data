import React from 'react'
import Deepak from './Deepak'
import Moxit from './Moxit'
import Rishi from './Rishi'

function ParentContext() {
  return (
    <div>
        <h1>Parent</h1>
        
      <Deepak/>
      <Moxit/>
      <Rishi/>
    </div>
  )
}

export default ParentContext

