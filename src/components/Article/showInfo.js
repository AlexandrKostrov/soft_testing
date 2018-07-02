import React from 'react';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import './style.css';

export default function (Component){
    return class extends React.Component{
        
        renderText = (text,name) => {
           return (
            <ListGroup> 
               { name && <h4 className="title">{name.toUpperCase()}</h4>}
           { Object.keys(text).map(elem => {
                if(typeof (text[elem]) === 'object'){
                    return this.renderText(text[elem],elem);
                }else{
               return(
                   <ListGroupItem className="list" key={elem} bsStyle="info">{elem} : {text[elem]}</ListGroupItem>
               )}
            })}
            </ListGroup>  
            )
        }

        render(){
            return <Component {...this.props} renderText={this.renderText}/>
        }
    }
}