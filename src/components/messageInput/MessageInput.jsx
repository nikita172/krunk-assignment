import React from 'react'
import "./messageInput.css"
import whiteArrow from "../../assets/images/whiteArrow.png"
import logo from "../../assets/images/logo.svg"
import paperclip from "../../assets/images/paperclip.png"
const MessageInput = () => {
  return (
    <div className='inputBox'>
      <div className="inputBoxTop">
        <div className="inputBoxLeft">
          <input placeholder='Type your message' />
          <img src={paperclip} />
        </div>
        <button><img src={whiteArrow} /></button>
      </div>
      <div className="inputBoxBottom">
        <span className='poweredBy'>Powered by</span>
        <span className='krunk'>Krunk.ai</span>
        <img src={logo} />
      </div>
    </div>
  )
}

export default MessageInput