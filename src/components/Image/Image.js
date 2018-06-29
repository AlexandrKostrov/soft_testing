import React from 'react';
import { LazyLoadImage,trackWindowScroll  } from 'react-lazy-load-image-component';
import './style.css';
 
const  Image = ({ pict}) =>{
  return (<div>
     
    <img className="image" src={pict} /> 
     
       
    
  </div>)
 }

export default Image ;