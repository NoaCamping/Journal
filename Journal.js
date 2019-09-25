import React from 'react';
import NameTag from './NameTag';
import axios from 'axios';


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
                        {this.state.persons.map((person,index)=>
                        
                                 <NameTag id={person.id}
                                    name={person.name} email={person.email} key={index}
                                />
                        
                       )}
                       
                    </div>
          );
    }
  
}

export default Journal;
