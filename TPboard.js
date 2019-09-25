import React from 'react';
import './TPboard.css';
import {Link} from 'react-router-dom';


class TPboard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id": this.props.location.state.id};
    }
    
    render(){
        return (
            <div id="board">
                <h2> Tasks and Posts Board</h2>
                <h4>Hello client number {this.state.id}</h4>
                <div id="switches">
                    
                        <Link to={{
                            pathname: `/PostBoard/${this.state.id}`,
                            state:{id: this.state.id}
                            }} >
                            Post Board
                        </Link>
                    
                   
                    
                    
                        <Link to={{
                            pathname: `/TaskBoard/${this.state.id}`,
                            state:{id: this.state.id}
                            }} >
                            Task Board
                            </Link>
                    
                </div>
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/49/confusion-311388__340.png" alt="options"/>
            </div>
          );
    }
  
}

export default TPboard;
