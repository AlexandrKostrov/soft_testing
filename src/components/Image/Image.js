import React from 'react';
import { LazyLoadImage,trackWindowScroll  } from 'react-lazy-load-image-component';
import './style.css';
 
const  Image = ({ pict,coords}) =>{
  
  return <LazyLoadImage
     className="image"
     src={pict}
     scrollPosition={coords}
     />
    } 
     
       
    

 

export default Image ;