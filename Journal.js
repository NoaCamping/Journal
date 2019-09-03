import React from 'react';
import NameTag from './NameTag';
import axios from 'axios';

/*componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        this.setState({item:{name: response.data.name, email: response.data.email}});
    });
}*/

class Journal extends React.Component {
    constructor(props){
        super(props);

        this.state={item: {"name":"", "email":""}};
    }
    render(){
        return (
            <div className="App">
              
              <NameTag name="Dan" email="d@gmail.com"/>
              <NameTag/>
              
            </div>
          );
    }
  
}

export default Journal;
