import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer';
import ContactDetail from '../components/ContactDetails/ContactDetails';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Header/>
     <Router>
       <div>
     
      <Switch>
            
      <Route exact path={`/`} component ={MainContainer} />
    
      {this.props.contacts.map(contact=>{
        return ( <Route exact path={`/${contact.lastName}`}  render={props => {
          return <ContactDetail {...props} 
                avatar = {contact.avatar}
                fullName = {`${contact.firstName} ${contact.lastName}`}
                age = {contact.age}
                information = {contact.information} />;
                  
        }} />)
      })}
             
            </Switch>
            </div>
      </Router>
      </div>
    );
  }
}

export default App;
