import React from 'react';
import  './TaskTag.css';
import axios from 'axios';

class TaskTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id": this.props.id,"title": "", "completed": "", "mytasks":[]} 
    }

   
    componentDidMount=async()=>{
        await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.state.id}`)
        .then(response=>{
            const tasks=response.data;
            this.setState({mytasks: tasks});
        })
    }

    render(){
       
        let thetasks=this.state.mytasks.map((x,index)=>
        {
            return <div>
                    <h2 key={index+"a"}><u>Title: </u> &nbsp; {x.title}</h2>
                    <h2 key={index+"b"}><u>Completed: </u> &nbsp; {x.completed}</h2>
                </div>
        })
       
        return(
           <div id="tCard">
                    

           </div>
           
        );
    }
}

export default TaskTag;