import React, { Suspense } from 'react'
// import Moxit from './Moxit'


const Moxit = React.lazy(()=>(import('./Moxit')))


function Dipak() {
  return (
    <div>
        <Suspense fallback={<><img src=''></img></>}>
        <Moxit/>
        </Suspense>
     
    </div>
  )
}

export default Dipak
