import React from 'react';
import Card from '../Card/Card';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import AutoComplete from '../AutoComplete/AutoComplete';
import hoc from './hoc.js';
import autoCompleteHoc from './autoCompleteHoc';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import './style.css';

const AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bbqVJgbf3Qb7sYyl8DW_KEViZa-gqWny_IoYjtFYl9w_6JLw";

const MainContainer = ({contacts,loadContact,sortByDate,sortByName,match,matchCatch,
  onUsersRec,display,renderUsers,users,showLocalContacts,handleRef,button,
  inputVisibility,switcher,getUser,user,sortByServName,sortById,butAction,handleSerLoad}) => {
    
  return (  <section className="section">
          <header>
            <div className="sort" >
          {  inputVisibility && <AutoComplete onChange={matchCatch} button={button}/>}
          <button onClick = {switcher} className="search"> Search </button>
          <button onClick = {sortById} > idDesc </button>
          <button onClick = {sortByServName} > Name Sort </button>
          </div>
          </header>
          <div className="body">
         {/* { !display ?
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
            }   */
            user.map(contact => {
              return (
                <main>
                <NavLink to={contact.name}>
               <Card
                avatar = {AVATAR}
                fullName = {`${contact.name}`}
                age = {contact.id}
                information = {contact.phone}
                />
                </NavLink>

            </main>
                )
              })
            }
          </div>
        
          <footer>
      <button ref={handleRef} className="load-more"
      onClick = {loadContact}>
        Load More
      </button>
      <button 
      className = {user.length ? "hide" : "load-more"}
      ref = {handleSerLoad}
      onClick = {butAction}>
        Load from Server
      </button>
      
    </footer>
    </section>)

}

export default  hoc(autoCompleteHoc(trackWindowScroll(MainContainer)));