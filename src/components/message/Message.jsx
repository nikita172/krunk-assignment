import React from 'react'
import "./message.css"
const Message = ({ item }) => {
  return (
    <div className={`messageContainer ${item.type === "outgoing" ? "outgoingMessage" : ""}`}>
      <div className={`messageContent ${item.type === "outgoing" ? "outgoingMessage" : ""}`}>
        {item.message}
      </div>
      <div className={`time ${item.type === "outgoing" ? "outgoingMessage" : ""}`}>{item.time}</div>
    </div>
  )
}

export default Message