import React from 'react';
import  './PostTag.css';

class PostTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id": "0","title": "", "body": ""} 
    }

    componentDidMount=(props)=>{
        this.setState=({"id": this.props.id});
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