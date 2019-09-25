import React from 'react';
import TaskTag from './TaskTag';
import './TaskBoard.css';
import axios from 'axios';



class TaskBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id":  this.props.location.state.id, "mytasks": []};
    }

    componentDidMount(){
      axios.get(`https://jsonplaceholder.typicode.com/todos/?userId={this.state.id}`)
      .then(response=>{
          const tasks=response.data;
          this.setState({mytasks: tasks});
          
      });
  }

    render(){
        return (
            <div id="taskboard">
              <h2>Tasks for client number {this.state.id}</h2>
              <ul>
              {this.state.mytasks.map((task,index)=>
                    <li  key={index}>
                      <TaskTag id={this.state.id} title={task.title} body={task.body}/>  
                    </li>  
                      )}
              </ul>
             
              
            </div>
          );
    }
  
}

export default TaskBoard;
