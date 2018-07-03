import React from 'react';
import './style.css';

class AutoComplete extends React.Component {
    constructor(props){
        super(props);
    }
    handleInp=(node)=>{
        this.inp=node;
    }
      resolver = (event) =>{
          const {button} = this.props; 
         
         const value = this.inp.value;
        if(value){
           
            button.style.visibility = "hidden";
        }else{
            button.style.visibility = "visible"
        }
         return this.props.onChange(value);
    }
    render(){
    return(
        <input ref={this.handleInp} className="input" 
        type="text" placeholder="enter the surname" 
        onChange={this.resolver}
        />
    )}
}

export default AutoComplete;