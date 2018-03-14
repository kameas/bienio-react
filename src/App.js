// React Components import
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import './App.styl';

// Other components
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <div className="wrapper">
            <Navigation></Navigation>
            <Content></Content>
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
