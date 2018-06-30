import React from 'react';

export default function hoc (Component){
    return class extends React.Component{
        show = async () => {
           await this.props.serverUsers();
            console.log(this.props.users);
        }
        render(){
            return (
                <Component {...this.props} onUsersRec={this.show}/>
            )
        }
    }
}