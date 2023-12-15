import React, { useEffect, useState } from 'react';
import { ChatConnection } from './ChatConnection';

function Chat({roomId})// General
{
    // http://localhost:3000/ 

    const [serverUrl,setServerUrl] = useState("http://localhost:1234/")

    useEffect(()=>{

       const connection =  ChatConnection(serverUrl,roomId);
       connection.connect();

       return ()=>{
        connection.disconnect();
       }

    },[serverUrl,roomId])


    return(
        <>
            <h1>Welcome to {roomId} Room</h1>
        
        </>
    )
}


function ChatRoom() {

   const [roomId,setRoomId] =  useState("General");
   const [show,setShow] =  useState(false);
  return (
    <div>
        Chat room :  
        {" "}
        <select value={roomId} onChange={(e)=>{setRoomId(e.target.value)}}>
            <option>General</option>
            <option>Travel</option>
            <option>Music</option>
        </select>
        
        &nbsp;
        <button onClick={()=>{setShow(!show)}}>
            {(show)? "Close Chat" : "Open Chat" }
        </button>

        <Chat roomId={roomId}/>

      
    </div>
  )
}

export default ChatRoom
