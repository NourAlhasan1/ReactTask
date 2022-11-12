import React from 'react'
import {NavLink} from 'react-router-dom'
const About = () => {
  return (
    <navbar>
    <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink> </li>
        
       
    </ul>
</navbar>
  )
}

export default About