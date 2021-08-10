import React from 'react';
import img1 from '../src/images/img2.svg';
import Common from './Common';

const Home = () => {
  const text='We are group of talented developer';
  return (
    <>
      <Common name='Grow your knowledge with us ' content={text} imgsrc={img1} visit="/service" btname="Get Started" />
    </>
  );
};

export default Home
