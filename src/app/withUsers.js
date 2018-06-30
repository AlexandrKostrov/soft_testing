import React from 'react';

export default function withUsers(Component){
   return class extends React.Component{
       state={
           users:[],
       }

       async componentWillMount(){
           await new Promise(ok=> setTimeout(ok,1000));
           const users=await fetch('http://jsonplaceholder.typicode.com/users'
           ,).then(r=>r.json());
           this.setState({users});
       }

       render(){
           return <Component {...this.props}  users={this.state.users}/>
       }
   }
}