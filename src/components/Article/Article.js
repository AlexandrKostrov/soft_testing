import React from 'react';
import showInfo from './showInfo';
import './style.css';

const Article = ({text,renderText}) =>{
    return(
      <section className="article">
        {renderText(text)}
      </section>
    )
}

export default showInfo(Article);