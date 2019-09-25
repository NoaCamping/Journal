import React from 'react';
import  './TaskTag.css';

class TaskTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id": this.props.id,"title": this.props.title, "completed": this.props.completed} 
    }

   

    render(){
       
        return(
           <div id="tCard">
               <h2>Title: &nbsp; {this.state.title}</h2>     
                <h2>Completed: &nbsp; {this.state.completed}</h2>
           </div>
           
        );
    }
}

export default TaskTag;