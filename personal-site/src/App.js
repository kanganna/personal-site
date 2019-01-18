import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Sidebar} from './components/Sidebar';
import {Main} from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
        
      </div>
    );
  }
}

export default App;
