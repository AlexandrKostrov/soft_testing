import React from 'react';
import Card from '../Card/Card';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import AutoComplete from '../AutoComplete/AutoComplete';
import withUsers from './withUsers';
import hoc from './hoc.js';
import autoCompleteHoc from './autoCompleteHoc';
import './style.css';


const MainContainer = ({contacts,loadContact,sortByDate,sortByName,match,matchCatch,
  onUsersRec,display,renderUsers,users,showLocalContacts,handleRef,button,
  inputVisibility,switcher}) => {
      
  return (  <section className="section">
          <header>
            <div className="sort" >
          {  inputVisibility && <AutoComplete onChange={matchCatch} button={button}/>}
          <button onClick = {sortByDate} > Date Sort </button>
          <button onClick = {sortByName} > Name Sort </button>
          <button onClick = {switcher} > Search </button>
          </div>
          </header>
          <div className="body">
         { !display ?
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
              }) :renderUsers()
            }  
          </div>
          <footer>
      <button ref={handleRef} className="load-more"
      onClick = {showLocalContacts}>
        Load More
      </button>
      <button className="load-more"
      onClick = {onUsersRec}>
        Load from Server
      </button>
    </footer>
    </section>)

}

export default  withUsers(hoc(autoCompleteHoc(MainContainer)));