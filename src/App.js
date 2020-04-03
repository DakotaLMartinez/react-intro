import React from 'react';
import logo from './logo.svg';
import './App.css';
import Assignment from './Assignment';
import Comments from './Comments';

function App() {
  console.log('rendering App')
  return (
    <div>
      <header>
        <Assignment details="Learn more about React" />
        <Comments header="View Comments" />
      </header>
    </div>
  );
}

export default App;
