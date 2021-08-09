import React from 'react'
import Common from './Common'
import img1 from '../src/images/hero-img.png';


const About = () => {
    return (
        <>
           <Common name="Welcome to About page" imgsrc={img1} visit="/contact" btname="Contact Us"/>
        </>
    )
}

export default About
