import React, { useContext } from 'react';

import { data } from './UseContextHook';
import { money } from './UseContextHook';

function Child2Compo() {
  const x = useContext(data);
  const rs = useContext(money)

  return (
    <div>
        <h1>Child 2 has this {x[3].id + " " + rs[0]} now..!</h1>
        <h1>Child 2 has this {rs[0]} now..!</h1>
      
    </div>
  )
}

export default Child2Compo
