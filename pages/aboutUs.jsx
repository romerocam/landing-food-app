import React from 'react'
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'

const aboutUs = () => {
  return (
    <div>
        <Main heading='My Work' message='This is some of my recent work traveling the world.' />
        <Portfolio />
    </div>
  )
}

export default aboutUs