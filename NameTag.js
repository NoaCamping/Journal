import React from 'react';
import  './NameTag.css';
import {Link} from 'react-router-dom';
//import TPboard from './TPboard';

class NameTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id":"0","name": "", "email": ""} 
    }

    componentDidMount(props){
        this.setState({id: this.props.id,name: this.props.name, email: this.props.email});
        
    }
   

    render(){        
        return(
            <div className="pic_list">
                <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png" alt="client"/>
                <div className="ncard">
                            <h2><u> Id number: </u> &nbsp; {this.state.id}</h2>
                            <h2><u>Name:  </u> &nbsp; {this.state.name}</h2>
                            <h2><u>Email:  </u> &nbsp; {this.state.email}</h2>
                        
                        <button className="btn">
                            <Link  
                            to={{
                                pathname:`/TPboard/${this.state.id}`,
                                state: {id: this.state.id, name: this.state.name}
                            }}
                            >
                                Tasks Posts Board
                            </Link>  
                        </button>
                   
                    </div>    
            </div>
                    
                
            
           
           
        );
    }
}

export default NameTag;