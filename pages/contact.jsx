import React from 'react'
import Contact from '../components/Contact'
import Main from '../components/Main'

const contact = () => {
  return (
    <div>
        <Main heading='Contacto' message='Envíanos tuconsulta completando el formulario de abajo' />
        <Contact />
    </div>
  )
}

export default contact
