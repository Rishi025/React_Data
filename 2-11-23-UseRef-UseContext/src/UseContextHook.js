import React, { createContext } from 'react'
import ParentCompo from './ParentCompo'

export const data = createContext();
export const money = createContext()

function UseContextHook() {
  return (
    <div>
      <data.Provider value={[1,2,3,{id:"Real Estate"}]}>
        <money.Provider value={[10,20]}>
         <ParentCompo/>
        </money.Provider>
      </data.Provider>
     
    </div>
  )
}

export default UseContextHook
