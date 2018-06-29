import React from 'react';
import Card from '../Card/Card';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import './style.css';


const MainContainer = ({contacts,loadContact,sortByDate,sortByName,match}) => {
  return (  <section className="section">
          <header>
            <div className="sort" >
          <button onClick = {sortByDate} > Date Sort </button>
          <button onClick = {sortByName} > Name Sort </button>
          </div>
          </header>
          <div className="body">
            {
              contacts.map(contact => {
              return (
                <main>
                <NavLink to={contact.lastName}>
               <Card
                avatar = {contact.avatar}
                fullName = {`${contact.firstName} ${contact.lastName}`}
                age = {contact.age}
                information = {contact.information}
                />
                </NavLink>
              
            </main>
                )
              })
            }
    
          </div>
          <footer>
      <button className="load-more"
      onClick = {loadContact}>
        Load More
      </button>
    </footer>
    </section>)
     
}

export default MainContainer;