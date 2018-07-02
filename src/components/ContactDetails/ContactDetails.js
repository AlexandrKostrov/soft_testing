import React from 'react';
import {Link} from 'react-router-dom';
import Article from '../Article/Article';
import './style.css';

const ContactDetail = ({avatar,fullName,id,email,phone,username,website,address,company,redisplayState,match}) => {
  const acticleCont = {email,phone,username,website,address,company,};
    return(
        <section className="section">
           
          <img className = "img" src={avatar} />
             <span className = "name">{fullName}</span> 
             <span className="idNumber">{id} idNumber</span>
            
     <Article text = {acticleCont}/>
          
          <footer>
          <Link to={'/'}> 
      <button className="load-more"
      onClick={redisplayState}>
        back
      </button>
      </Link> 
    </footer>
    </section>
    )
}

export default ContactDetail;