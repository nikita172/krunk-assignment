import React from 'react'
import "./mainView.css"
import Messages from '../messages/Messages'
import PopularTags from '../popularTags/PopularTags'
import Products from '../products/Products'
import Filters from '../filters/Filters'
import MessageInput from '../messageInput/MessageInput'
const MainView = () => {
  return (
    <div className='mainViewContainer'>
      <Messages />
      <PopularTags />
      <Products />
      <Filters />
      <MessageInput />
    </div>
  )
}

export default MainView