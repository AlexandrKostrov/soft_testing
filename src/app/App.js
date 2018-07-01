import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer';
import ContactDetail from '../components/ContactDetails/ContactDetails';
import withUsers from './withUsers';
import hoc from '../components/MainContainer/hoc';
import AVATARS from '../stubs/avatars';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    const {prevState} = this.props; 
    return (
      <div>
     <Header/>
     <Router>
       <div>
     
      <Switch>
            
      <Route exact path={`/`} component ={MainContainer} />
    
    
      {this.props.user.map(contact=>{
          
        return ( <Route exact path={`/${contact.name}`}  render={props => {
          return <ContactDetail {...props} 
                avatar = {AVATARS[contact.id - 1]}
                fullName = {`${contact.name}`}
                id = {contact.id}
                email = {contact.email} 
                phone = {contact.phone}
                username = {contact.username}
                website = {contact.website}
                address = {contact.address}
                company = {contact.company}
                redisplayState = {prevState}
                />;
                  
        }} />)
      })}
             
            </Switch>
            </div>
      </Router>
      </div>
    );
  }
}

export default withUsers(App);
