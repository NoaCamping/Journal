import React from 'react';
import  './PostTag.css';
import axios from 'axios';

class PostTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id": this.props.id,"title":this.props.title, "body":this.props.body} 
    }

   
   

    render(){       
       
        return(
           <div id="pCard">
               <h2><u>Title: </u> &nbsp; {this.state.title}</h2>
                <h2><u>Message: </u> &nbsp; {this.state.body}</h2>
                   
           </div>
           
        );
    }
}

export default PostTag;