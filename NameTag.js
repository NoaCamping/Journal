import React from 'react';
import  './NameTag.css';

class NameTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"name": "", "email": ""} 
    }

    componentDidMount=(props)=>{
        this.setState({name: this.props.name, email: this.props.email});
    }
   
    moveToTasksPosts=(e)=>{
        //moving to 2nd page with options to see tasks or posts
    }

    render(){
       
        
       
        return(
           <div id="nCard">
                    <h2><u>Name: </u> &nbsp; {this.state.name}</h2>
                    <h2><u>Email: </u> &nbsp; {this.state.email}</h2>
                    <input type="button" value="more" id="more" onClick={this.moveToTasksPosts}/>
           </div>
           
        );
    }
}

export default NameTag;