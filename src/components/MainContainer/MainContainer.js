import React from 'react';
import Card from '../Card/Card';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import AutoComplete from '../AutoComplete/AutoComplete';
import hoc from './hoc.js';
import autoCompleteHoc from './autoCompleteHoc';
import { LazyLoadImage,trackWindowScroll } from 'react-lazy-load-image-component';
import AVATARS from '../../stubs/avatars';
import scrollHoc from './scrollHoc';
import './style.css';



const MainContainer = ({contacts,loadContact,sortByDate,sortByName,match,matchCatch,
  onUsersRec,display,renderUsers,users,showLocalContacts,handleRef,button,
  visibility,switcher,getUser,user,sortByServName,sortById,butAction,handleSerLoad,scrollControl,
  }) => {
    const coord = {};
    coord.x = visibility.x;
    coord.y = visibility.y;
  return (<section className="section">
          <header>
            <div className="sort" >
          {  visibility.visibility && <AutoComplete onChange={matchCatch} button={button}/>}
          <button onClick = {switcher} className="search"> Search </button>
          <button onClick = {sortById} > idDesc </button>
          <button onClick = {sortByServName} > Name Sort </button>
          </div>
          </header>
          <div className="body" onScroll={scrollControl}>
         { 
            user.map(contact => {
              return (
                <main>
                <NavLink to={contact.name}>
               <Card
                avatar = {AVATARS[contact.id-1]}
                coords={coord}
                fullName = {`${contact.name}`}
                id = {contact.id}
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
      className = {user.length || visibility.visibility? "hide" : "load-more"}
      ref = {handleSerLoad}
      onClick = {butAction}>
        Load from Server
      </button>
      
    </footer>
    </section>)

}

export default  hoc(autoCompleteHoc(scrollHoc(MainContainer)));