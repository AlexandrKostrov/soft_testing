import React from 'react';
import Card from '../Card/Card';
import {NavLink} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import AutoComplete from '../AutoComplete/AutoComplete';
import hoc from './hoc.js';
import autoCompleteHoc from './autoCompleteHoc';
import AVATARS from '../../stubs/avatars';
import { Button,ButtonToolbar } from 'react-bootstrap';
import './style.css';



const MainContainer = ({loadContact,matchCatch, onUsersRec,handleRef,button, visibility,switcher,user,sortByServName,  sortById,butAction,handleSerLoad,scrollControl }) => {
 
 

 
    const coord = {};
    coord.x = visibility.x;
    coord.y = visibility.y;
  return (<section className="section">
          <header> 
            <div className="sort" >
          {visibility.visibility && <AutoComplete onChange={matchCatch} button={button}/>}
         {!!user.length && !visibility.visibility && 
          <Button bsStyle="primary" onClick = {switcher} > Search </Button>}
          <Button bsStyle="primary" onClick = {sortById} > idDesc </Button>
          <Button bsStyle="primary" onClick = {sortByServName} > Name Sort </Button>
          </div>
          </header>
          <div className="body" onScroll={scrollControl}>
         { 
            user.map(contact => {
              return (
                <main key = {contact.phone}>
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

export default  hoc(autoCompleteHoc(MainContainer));