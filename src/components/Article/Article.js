import React from 'react';
import './style.css';

const Article = ({text}) =>{
    return(
        <section className="article">
            {console.log(text)}
        { text }
      </section>
    )
}

export default Article;