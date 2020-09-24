import React, { Component } from 'react';
import f1 from '../img/f1.png'
import f2 from '../img/f2.jpg'
import f3 from '../img/f3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function offersScreen() {

  return (
    <Carousel className="carousel" infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} >
      <div>
        <img src={f1} />     
        
      </div>
      <div>
        <img src={f2} />     
        
      </div>
      <div>
        <img src={f3} />     
        
      </div>
    </Carousel>
  )
}

export default offersScreen;