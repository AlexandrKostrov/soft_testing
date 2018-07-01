import React from 'react';
import Image from '../Image/Image';
import { LazyLoadComponent,trackWindowScroll } from 'react-lazy-load-image-component';

import './style.css';

const Card = (props) =>{
  return ( <div  className='card'>
   
    <Image  pict={props.avatar}  coords={props.coords}/>
   
     <h1 className = "fullName">{props.fullName}</h1>
     <span className="id">{props.id} idNumber</span>
     <h4 className="tel">Telephone Number</h4>
     <div className="info">{props.information}</div>
  </div>)
}
export default Card;