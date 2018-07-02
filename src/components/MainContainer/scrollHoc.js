import React from 'react';

export default function scrollHoc (Component){
    return class extends React.Component{
    
       scroolControl = (event) =>  {
        const top = event.target.scrollTop;
        const left =event.target.scrollLeft;
        this.setState({x:left,y:top});
    }
 
    render(){

        return (
          <Component {...this.props} scroll={this.scroolControl} coords={this.state}/>
        )
    }

}
}