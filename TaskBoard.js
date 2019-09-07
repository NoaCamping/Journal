import React from 'react';
import TaskTag from './TaskTag';
import axios from 'axios';
import './TaskBoard.css';



class TaskBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id": "0"};
    }

    componentDidMount=(props)=>{
      this.setState=({"id": this.props.id});
   }
   
    render(){
        return (
            <div id="taskboard">
              <h2>Tasks for client number {this.state.id}</h2>
              <TaskTag />
              <TaskTag/>
              
            </div>
          );
    }
  
}

export default TaskBoard;
