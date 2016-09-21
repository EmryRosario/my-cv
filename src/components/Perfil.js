import React from 'react'

const Perfil = ({userAvatar, userName, userJob}) => (
  <section className="Perfil">
    <img src={userAvatar ? `./img/${userAvatar}.jpg` : './img/avatar.jpg'} alt="" className="Perfil-avatar"/>
    <h1 className="Perfil-name">{userName}</h1>
    <h3 className="Perfil-job">{userJob}</h3>
  </section>
)

export default Perfil
