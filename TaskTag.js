import React from 'react';
import  './TaskTag.css';

class TaskTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id": this.props.id,"title": this.props.title, "complete_task": this.props.finished} 
    }

   

    render(){
       
        return(
           <div id="tcard">
               <p>
               <h2>Title: {this.state.title}  </h2>   
                <h2>Completed:   {this.state.complete_task?"true":"false"}</h2> 
               </p>
                
           </div>
           
        );
    }
}

export default TaskTag;