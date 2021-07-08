import React from 'react'
import about from './images/home.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'




const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/contact' 
                btnName='Contact Now' 
            />
        </>
    )
}

export default About;