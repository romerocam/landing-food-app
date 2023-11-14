import React from 'react'
import Contact from '../components/Contact'
import Main from '../components/Main'

const contact = () => {
  return (
    <div>
        <Main heading='Contact' message='Envíanos tu consulta completando el formulario de abajo' />
        <Contact />
    </div>
  )
}

export default contact
