import React from 'react';
import TaskTag from './TaskTag';
import './TaskBoard.css';
import axios from 'axios';



class TaskBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id":  this.props.location.state.id, "name": this.props.location.state.name,"mytasks": []};
    }

    componentDidMount(){
      axios.get(`https://jsonplaceholder.typicode.com/todos/?userId=${this.state.id}`)
      .then(response=>{
          const tasks=response.data;
          this.setState({mytasks: tasks});
          
      });
  }

    render(){
        return (
            <div id="taskboard">
              <h2>{this.state.name}'s tasks</h2>
              
              {this.state.mytasks.map((task,index)=>
                    <div  key={index}>
                      <TaskTag id={this.state.id} title={task.title} finished={task.completed}/>  
                    </div>  
                      )}
              </div>
          );
    }
  
}

export default TaskBoard;
