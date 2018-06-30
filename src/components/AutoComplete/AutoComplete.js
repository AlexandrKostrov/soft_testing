import React from 'react';
import './style.css';

class AutoComplete extends React.Component {
    constructor(props){
        super(props);
    }
    handleInp=(node)=>{
        this.inp=node;
    }
      resolver = () =>{
          console.log(this.inp);
         const value = this.inp.value;
         return this.props.onChange(value);
    }
    render(){
    return(
        <input ref={this.handleInp} className="input" type="text" placeholder="enter the surname" onChange={this.resolver}/>
    )}
}

export default AutoComplete;