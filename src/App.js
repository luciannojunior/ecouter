import React, { Component } from 'react';
import Title from './components/Title';

import './App.css';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
