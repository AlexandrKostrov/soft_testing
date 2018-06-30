import React from 'react';
import {NavLink, Route,Switch} from 'react-router-dom';
import ContactDetail from '../ContactDetails/ContactDetails';
import Card from '../Card/Card';

export default function hoc (Component){
    return class extends React.Component{
        state={
            display:false,
        }
        renderUsers = ()=>{
            return(
                 
                    this.props.users.map(user=>{
                        return (
                            <main>
                            <NavLink to={user.username}>
                            <Card 
                            fullName = {user.name}
                            />
                            </NavLink>
                            
                            </main>
                        );
                    }) 
                 
            )
        }
        handleRef = (node) => {
            this.but = node;
        }
        show = async () => {
            await this.props.serverUsers();
           console.log(this.props.users)
            this.setState({display:true});
        }
        showLocalContacts = () =>{
            this.props.loadContact();
            this.setState({display:false});
        }
        render(){
            return (
                <Component {...this.props}
                 display={this.state.display}
                 renderUsers={this.renderUsers}
                 onUsersRec={this.show}
                 showLocalContacts={this.showLocalContacts}
                 handleRef={this.handleRef}
                 button = {this.but}
                 />
            )
        }
    }
}