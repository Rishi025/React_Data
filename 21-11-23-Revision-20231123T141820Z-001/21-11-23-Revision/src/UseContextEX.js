import React, { createContext, useState } from 'react'
import ParentContext from './ParentContext'

export const property = createContext();

function UseContextEX() {
    const [giveProp,setProp] =  useState(true)
  return (
    <div>
        <h1>Context HOOK</h1>
        <property.Provider value={(giveProp)? "property": "Sorry Betu..!"}>
        <ParentContext/>
        </property.Provider>
      
    </div>
  )
}

export default UseContextEX
