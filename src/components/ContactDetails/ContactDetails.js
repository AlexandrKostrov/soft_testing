import React from 'react';
import {Link} from 'react-router-dom';
import Article from '../Article/Article';

const ContactDetail = ({avatar,fullName,age,information}) => {
    return(
        <section className="section">
          
          <div className="body">
           
    <img className = "image" src={avatar} />
     <h1 className = "fullName">{fullName}</h1>
     <span className="age">{age} years</span>
     <Article text = {information}/>
  
          
          </div>
          <footer>
          <Link to={'/'}> 
      <button className="load-more">
        back
      </button>
      </Link> 
    </footer>
    </section>
    )
}

export default ContactDetail;