import React from 'react';
import axios from 'axios';
import './TPboard.css';
import TaskBoard from './TaskBoard';
import PostBoard from './PostBoard';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class TPboard extends React.Component {
    constructor(props){
        super(props);

        this.state={"item": {}};
    }

    componentDidMount=(props)=>{
      axios.get('https://sonplaceholder.typicode.com/users/${his.props.match.params.id}')
      .then(response=>this.setState({item: response.data}))
    }
    
    render(){
        return (
            <div id="board">
                <h2> Tasks and Posts Board</h2>
                <h4>Hello client number {this.state.id}</h4>
                <div id="switches">
                    <Switch>
                        <Link to="/PostBoard" component={PostBoard} id={this.state.item.id}>Post Board </Link>
                    </Switch>
                   
                    
                    <Switch>
                        <Link to="/TaskBoard" component={TaskBoard} id={this.state.item.id}>Task Board</Link>
                    </Switch> 
                </div>
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/49/confusion-311388__340.png" alt="options"/>
            </div>
          );
    }
  
}

export default TPboard;
