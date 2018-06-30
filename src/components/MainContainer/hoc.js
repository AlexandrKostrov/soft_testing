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
     
        show = async () => {
            await this.props.serverUsers();
           console.log(this.props.users)
            this.setState({display:true});
        }
        render(){
            return (
                <Component {...this.props}
                 display={this.state.display}
                 renderUsers={this.renderUsers}
                 onUsersRec={this.show}
                 renderRoutes={this.routes}
                 />
            )
        }
    }
}