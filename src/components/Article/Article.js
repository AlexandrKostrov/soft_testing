import React from 'react';
import showInfo from './showInfo';

import './style.css';

const Article = ({text,renderText,redisplayState}) =>{
    return(
        <div>
      <section className="article">
          <div className="bod">
        {renderText(text)}
        </div>
      </section>
      
      </div>
    )
}

export default showInfo(Article);