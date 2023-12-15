import React from 'react'

export function ChatConnection(serverUrl,roomId) {
  return {
    connect(){
        console.log("Connected to " + roomId + " at "+ serverUrl)
    },
    disconnect(){
        console.log("Dosconnected from " + roomId + " at "+ serverUrl)
    }
  }
}


