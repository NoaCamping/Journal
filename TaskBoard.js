import React from 'react';
import TaskTag from './TaskTag';
import axios from 'axios';
import './TaskBoard.css';



class TaskBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"name": ""};
    }
    render(){
        return (
            <div id="taskboard">
              <h2>Tasks for {this.state.name}</h2>
              <TaskTag />
              <TaskTag/>
              
            </div>
          );
    }
  
}

export default TaskBoard;
