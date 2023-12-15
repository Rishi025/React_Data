import userEvent from '@testing-library/user-event'
import React, { useEffect, useRef, useState } from 'react'

function ModalDialog() {

    const [show,setShow] = useState(false)
  return (
    <div>
      
      <button onClick={()=>{setShow(true)}}>
        Open Modal
      </button>
      <OpenModal isOpen={show}>
            <h3>Hello POP UP</h3>
            <button onClick={()=>{setShow(false)}}>Close</button>
        </OpenModal>
    </div>
  )
}

export default ModalDialog

export function OpenModal({isOpen,children})
{
    const ref = useRef();
   useEffect(()=>{
    
    if(!isOpen)
    {
    return;
    }
    
    const dialog = ref.current;
    dialog.showModal();

    return()=>{
        dialog.close();
    }


   },[isOpen])

    return(
        <dialog ref={ref}>
            {children}
        </dialog>
    )
}

