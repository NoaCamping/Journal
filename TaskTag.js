import React from 'react';
import  './TaskTag.css';

class TaskTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"title": "", "completed": ""} 
    }

    componentDidMount=(props)=>{
        this.setState({name: this.props.title, email: this.props.completed});
    }
   

    render(){
       
        
       
        return(
           <div id="tCard">
                    <h2><u>Title: </u> &nbsp; {this.state.title}</h2>
                    <h2><u>Completed: </u> &nbsp; {this.state.completed}</h2>
           </div>
           
        );
    }
}

export default TaskTag;