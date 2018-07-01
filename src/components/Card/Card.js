import React from 'react';
import Image from '../Image/Image';
import { LazyLoadComponent,trackWindowScroll } from 'react-lazy-load-image-component';

import './style.css';

const Card = (props) =>{
  return ( <div  className='card'>
    <LazyLoadComponent>
    <Image  pict={props.avatar} />
    </LazyLoadComponent>
     <h1 className = "fullName">{props.fullName}</h1>
     <span className="age">{props.age} idNumber</span>
     <div className="info">{props.information}</div>
  </div>)
}
export default trackWindowScroll(Card);