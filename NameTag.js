import React from 'react';
import  './NameTag.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import TPboard from './TPboard';



class NameTag extends React.Component{
  
    constructor(props){
        super(props);

       this.state={"id":"0","name": "", "email": ""} 
    }

    componentDidMount=(props)=>{
        this.setState({id: this.props.id,name: this.props.name, email: this.props.email});
    }
   

    render(){
       
        
       
        return(
                <Switch>
                    <div id="nCard">
                        <h2><u> Id number: </u> &nbsp; {this.state.id}</h2>
                        <h2><u>Name:  </u> &nbsp; {this.state.name}</h2>
                        <h2><u>Email:  </u> &nbsp; {this.state.email}</h2>
                        
                    <button>
                            <Link to={'/TPboard/${this.state.id}'} component={TPboard} >Tasks Posts Board</Link>     
                    </button>
                   
                    </div>    
                </Switch>
            
           
           
        );
    }
}

export default NameTag;