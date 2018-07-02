import React from 'react';

export default function autoCompleteHoc(Component){
   return class extends React.Component{
      

       switcher = () => {
        this.props.visibilSwitch();
           //this.setState({inputVisibility:true});
           this.props.prevState();
       }

       render(){
           return <Component {...this.props} 
           switcher={this.switcher}
           />
       }
   }
}