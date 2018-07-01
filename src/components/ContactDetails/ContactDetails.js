import React from 'react';
import {Link} from 'react-router-dom';
import Article from '../Article/Article';

const ContactDetail = ({avatar,fullName,id,email,phone,username,website,address,company,redisplayState}) => {
    return(
        <section className="section">
          
          <div className="body">
           
    <img className = "image" src={avatar} />
     <h1 className = "fullName">{fullName}</h1>
     <span className="age">{id} idNumber</span>
     <Article text = {`email : ${email},         
     phoneNumber : ${phone},              
     userName : ${username},             
     website : ${website},             
     address : ${address},                     
     company : ${company}`}/>
  
          
          </div>
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