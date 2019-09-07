import React from 'react';
import './App.css';
import NameTag from './NameTag';
import TPboard from './TPboard';
import Journal from './Journal';
import TaskTag from './TaskTag';
import TaskBoard from './TaskBoard';
import PostBoard from './PostBoard';
import {BrowserRouter as Router,Switch,Route,Link,withRouter} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    
  }
  render(){


    return (
      <Router>
          <div className="App">
                  
                <Switch>
                    <Route path='/' exact component={Journal}/>
                    <Route path='/TPboard'  component={withRouter(TPboard)}/>
                    <Route path='/Taskboard'  component={TaskBoard}/>
                    <Route path='/Postboard'  component={PostBoard}/>

                </Switch>
               
          </div>
      </Router>
      
    );
  }
  
}

export default App;
