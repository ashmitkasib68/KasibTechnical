import React from 'react'
import home from './images/home.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'





const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                visit='/' 
                btnName='Get Started' 
            />
        </>
    )
}

export default Home;