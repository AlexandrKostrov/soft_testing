import React from 'react';

export default function (Component){
    return class extends React.Component{
        
        renderText = (text,name) => {
           return (
            <ul> 
               { name && <h4>{name}</h4>}
           { Object.keys(text).map(elem => {
                if(typeof (text[elem]) === 'object'){
                    return this.renderText(text[elem],elem);
                }else{
               return(
                   <li key={elem}>{elem} : {text[elem]}</li>
               )}
            })}
            </ul>  
            )
        }

        render(){
            return <Component {...this.props} renderText={this.renderText}/>
        }
    }
}