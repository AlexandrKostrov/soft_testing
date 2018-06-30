import React from 'react';

export default function autoCompleteHoc(Component){
   return class extends React.Component{
       state={
           inputVisibility:false,
       }

       switcher = () => {
           this.setState({inputVisibility:true});
           this.props.prevState();
       }

       render(){
           return <Component {...this.props} 
           inputVisibility={this.state.inputVisibility}
           switcher={this.switcher}
           />
       }
   }
}