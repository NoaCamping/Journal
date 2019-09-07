import React from 'react';
import PostTag from './PostTag';
import axios from 'axios';
import './PostBoard.css';



class PostBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id": "0"};
    }

    componentDidMount=(props)=>{
      this.setState=({"id": this.props.id});
   }

    render(){
        return (
            <div id="postboard">
              <h2>Posts for client number {this.state.id}</h2>
              <PostTag />
              <PostTag/>
              
            </div>
          );
    }
  
}

export default PostBoard;
