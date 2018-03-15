// React Components import
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './history';

// Styles
import './App.styl';

// Other components
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <Navigation></Navigation>
          <Content></Content>
        </div>
      </Router>
    );
  }
}

export default App;
