import React from 'react';
import PostTag from './PostTag';
import axios from 'axios';
import './PostBoard.css';



class PostBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id": this.props.location.state.id, "myposts":[]};
    }

    componentDidMount=async()=>{
      await axios.get(`https://jsonplaceholder.typicode.com/posts/?userId={this.state.id}`)
      .then(response=>{
          const posts=response.data;
          this.setState({myposts: posts});
      })
  }

    render(){
        return (
            <div id="postboard">
              <h2>Posts for client number {this.state.id}</h2>
              {this.state.myposts.map(post=>
                    <PostTag id={this.state.id} title={post.title} body={post.body}/>    
                      )}
              
              
              
            </div>
          );
    }
  
}

export default PostBoard;
