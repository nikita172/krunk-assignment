import React from 'react'
import "./messages.css";
import Message from '../message/Message';
const Messages = () => {
  const messages = [
    {
      message: "Hi Sam! I am your personal shopping assistant , how can i help you today ?",
      type: "incoming",
      time: "4:45 PM"
    },
    {
      message: "I am looking for a hand bag, with long strap .",
      type: "outgoing",
      time: "4:46 PM"
    }
  ]
  return (
    <div className='messagesContainer'>
      {messages.map((item, index) => (
        <Message key={index} item={item} />
      ))}
    </div>
  )
}

export default Messages