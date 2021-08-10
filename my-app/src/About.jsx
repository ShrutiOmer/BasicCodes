import React from 'react'
import Common from './Common'
import img1 from '../src/images/hero-img.png';


const About = () => {
    const text='This website is created just for fun.';
    return (
        <>
            <Common name="Welcome to " content={text} imgsrc={img1} visit="/contact" btname="Contact Us"  />
        </>
    );
};

export default About
