import React from 'react';
import './App.css';
import Ex2_2 from './Ex2_2'
import Ex2_3 from './Ex2_3'
import Ex2_4 from './Ex2_4'
import Ex3_1 from './Ex3_1'
import Ex5_1 from './Ex5_1'
import Ex5_2 from './Ex5_2'
import Ex5_3Persons from './Ex5_3Persons'
import Ex5_3Person from './Ex5_3Person'
import Parent from './Parent'
import Journal from './Journal';
import TaskTag from './TaskTag';
import TaskBoard from './TaskBoard';


function App() {
  return (
    <div className="App">
      
      <Journal />
      <TaskTag/>
      <TaskBoard />
    </div>
  );
}

export default App;
