import React from 'react';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import Card from '../Card/Card';

export default function hoc (Component){
    return class extends React.Component{
    
        handleRef = (node) => {
            this.but = node;
        }

        handleSerLoad = (node) => {
            this.butSerLoad = node;
        }

        butAction = () => {
            this.props.getUser();
        }
      

     
        render(){
            return (
                <Component {...this.props}
                 handleRef={this.handleRef}
                 button = {this.but}
                 handleSerLoad = {this.handleSerLoad}
                 butAction = {this.butAction}
                 />
            )
        }
    }
}