import React from 'react';
import './App.css';
import TPboard from './TPboard';
import Journal from './Journal';
import TaskBoard from './TaskBoard';
import PostBoard from './PostBoard';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


class App extends React.Component {
 
  render(){

    return (
      <Router>
          <div className="App">
               <h1>Tasks-Posts Management</h1>   
                <Switch>
                    <Route path='/' exact component={Journal}/>
                    <Route path='/TPboard/:id'  component={TPboard}/>
                    <Route path='/Taskboard/:id'  component={TaskBoard}/>
                    <Route path='/Postboard/:id'  component={PostBoard}/>

                </Switch>
               
          </div>
      </Router>
      
    );
  }
  
}

export default App;
