import React from 'react';
import NameTag from './NameTag';
import axios from 'axios';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import TaskBoard from './TaskBoard';
import PostBoard from './PostBoard';

class Journal extends React.Component {
    constructor(props){
        super(props);

        this.state={"persons": []};
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const people=response.data;
            this.setState({persons: people});
        })
    }
    

    render(){
        return (
                    <div>
                        {this.state.persons.map(person=>
                        <NameTag id={person.id}
                        name={person.name} email={person.email} />)}
                       
                    </div>
          );
    }
  
}

export default Journal;
