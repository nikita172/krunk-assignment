import React from 'react'
import "./header.css";
import chatBot from "../../assets/images/chatbot.png"
import verified from "../../assets/images/verified.png"
const Header = () => {
  return (
    <div className='headerContainer'>
      <div className="headerleft">
        <div className='chatBotImg'>
          <div className="imgContainer">
            <img className='chatBotIcon' src={chatBot} />
          </div>
          <span className='onlineIndicator chatBotOnline'></span>
        </div>
        <div className='assisstantDetails'>
          <div className="assistantName">
            <span>Timpu</span>
            <img src={verified} alt="" />
          </div>
          <div className='chatbotTitle'>Chat assistant</div>
        </div>
      </div>
      <div className="headerRight">
        <span className='onlineIndicator'></span>
        <span className='onlineTag'>Online</span>
      </div>
    </div>
  )
}

export default Header