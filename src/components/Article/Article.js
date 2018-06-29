import React from 'react';
import './style.css';

const Article = ({text}) =>{
    return(
        <section className="article">
        { text }
      </section>
    )
}

export default Article;