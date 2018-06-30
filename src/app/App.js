import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer';
import ContactDetail from '../components/ContactDetails/ContactDetails';
import withUsers from './withUsers';
import hoc from '../components/MainContainer/hoc';
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
    
      {this.props.contacts.map(contact=>{
        console.log(contact);
        return ( <Route exact path={`/${contact.lastName}`}  render={props => {
          return <ContactDetail {...props} 
                avatar = {contact.avatar}
                redisplayState = {prevState}
                fullName = {`${contact.firstName} ${contact.lastName}`}
                age = {contact.age}
                information = {contact.information} />;
                  
        }} />)
      })}
      {this.props.users.map(contact=>{
      //  console.log(contact);
        return ( <Route exact path={`/${contact.username}`}  render={props => {
          return <ContactDetail {...props} 
               // avatar = {contact.avatar}
                fullName = {`${contact.name}`}
                //age = {contact.age}
                //information = {contact.information} 
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
