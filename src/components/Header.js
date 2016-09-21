import React from 'react'

const Header = ({userName, userAvatar}) => (
  <header className="Header">
    <img src={userAvatar ? `./img/${userAvatar}.jpg` : './img/avatar.jpg'} alt="Avatar" className="Header-avatar" height="100"/>
    <span className="Header-name">{userName}</span>
  </header>
)

export default Header
