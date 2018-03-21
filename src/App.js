import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import ProjectContainer from './components/ProjectContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <ProjectContainer/>
        <Modal/>
      </div>
    );
  }
}

export default App;
