import React, { useContext } from 'react';
import { property } from './UseContextEX';

function Rishi() {

  const prop = useContext(property)
  return (
    <div>
       <h1>Rishi has now {prop} </h1>
    </div>
  )
}

export default Rishi
