import React from 'react'
import Contact from '../components/Contact'
import Main from '../components/Main'

const contact = () => {
  return (
    <div>
        <Main heading='Contacto' message='Envíanos tus consulta completando el formulario de abajo' />
        <Contact />
    </div>
  )
}

export default contact
