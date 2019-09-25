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
                    <div className="ncard">
                            <h2><u> Id number: </u> &nbsp; {this.state.id}</h2>
                            <h2><u>Name:  </u> &nbsp; {this.state.name}</h2>
                            <h2><u>Email:  </u> &nbsp; {this.state.email}</h2>
                        
                        
                            <Link  
                            to={{
                                pathname:`/TPboard/${this.state.id}`,
                                state: {id: this.state.id}
                            }}
                            >
                                Tasks Posts Board
                            </Link>  
                        
                   
                    </div>    
                
            
           
           
        );
    }
}

export default NameTag;