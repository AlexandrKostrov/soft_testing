import React from 'react';
import { LazyLoadImage,trackWindowScroll  } from 'react-lazy-load-image-component';
import './style.css';
 
const  Image = ({ pict,coords}) =>{
  return (<div className="image">
     <LazyLoadImage
     src={pict}
     scrollPosition={coords}
     />
    {/* <img className="image" src={pict} />  */}
     
       
    
  </div>)
 }

export default Image ;