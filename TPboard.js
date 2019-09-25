import React from 'react';
import axios from 'axios';
import './TPboard.css';
import TaskBoard from './TaskBoard';
import PostBoard from './PostBoard';
import {Link} from 'react-router-dom';


class TPboard extends React.Component {
    constructor(props){
        super(props);

        this.state={"item": {}, "id": this.props.location.state.id};
    }

    componentDidMount=async(props)=>{

      await axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(response=>this.setState({item: response.data}))
      
    };
    
    render(){
        return (
            <div id="board">
                <h2> Tasks and Posts Board</h2>
                <h4>Hello client number {this.state.id}</h4>
                <div id="switches">
                    
                        <Link to={{
                            pathname: `/PostBoard/${this.state.id}`,
                            state:{
                                id: this.state.id,
                                funny: true
                                }
                            }} component={PostBoard}>
                            Post Board
                        </Link>
                    
                   
                    
                    
                        <Link to={{
                            pathname: `/TaskBoard/${this.state.id}`,
                            state:{
                                id: this.state.id
                            }
                            }} component={TaskBoard}>
                            Task Board
                            </Link>
                    
                </div>
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/49/confusion-311388__340.png" alt="options"/>
            </div>
          );
    }
  
}

export default TPboard;
