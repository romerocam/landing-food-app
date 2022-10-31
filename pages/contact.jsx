import React from 'react'
import Contact from '../components/Contact'
import Main from '../components/Main'

const contact = () => {
  return (
    <div>
        <Main heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
    </div>
  )
}

export default contact