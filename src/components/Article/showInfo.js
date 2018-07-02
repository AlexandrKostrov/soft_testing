import React from 'react';

export default function (Component){
    return class extends React.Component{
        
        renderText = (text) => {
           return (
            <ul> 
           { Object.keys(text).map(elem => {
                if(typeof (text[elem]) === 'object'){
                    return this.renderText(text[elem]);
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