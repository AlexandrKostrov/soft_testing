import React from 'react';

export default function scrollHoc (Component){
    return class extends React.Component{
        
      state = {
          x : 0,
          y : 0,
      }

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