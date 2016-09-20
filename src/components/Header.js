import React from 'react'

const Header = ({userName, userAvatar}) => (
  <header className="Header">
    if (userAvatar) <img src={`./img/${userAvatar}.jpg`} alt="Avatar" class="Header-avatar"/>
    <img src='./img/avatar.jpg' alt="Avatar" class="Header-avatar"/>
    <span class="Header-name">{userName}</span>
  </header>
)

export default Header
