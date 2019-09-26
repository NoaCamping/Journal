import React from 'react';
import PostTag from './PostTag';
import axios from 'axios';
import './PostBoard.css';



class PostBoard extends React.Component {
    constructor(props){
        super(props);

        this.state={"id": props.location.state.id, "name": props.location.state.name,"myposts":[]};
    }

    componentDidMount(){
      axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.state.id}`)
      .then(response=>{
          const messages=response.data;
          this.setState({"myposts": messages});
          
      })
  }

    render(){
        return (
            <div id="postboard">
              <h2> {this.state.name}'s posts</h2>
              

              {this.state.myposts.map((post,index)=>
                    <PostTag id={this.state.id} title={post.title} body={post.body} key={index}/>    
                      )}
              
              
            </div>
          );
    }
  
}

export default PostBoard;
