import React, { Component } from 'react';
import Base from './components/Base';

import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = 'Écouter';
  }
  
  render() {
    return (
      <div>
        <Base/>
      </div>
    );
  }
}

export default App;
