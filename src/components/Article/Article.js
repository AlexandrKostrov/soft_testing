import React from 'react';
import showInfo from './showInfo';
import './style.css';

const Article = ({text,renderText}) =>{
    return(
      <section className="article">
          <div className="bod">
        {renderText(text)}
        </div>
      </section>
    )
}

export default showInfo(Article);