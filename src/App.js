// React Components import
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './history';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Styles
import './App.styl';

// Other components
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';


const initialState = {
  faculties: [],
  groups: [],
  schedule: {},
  saveSchedule: {}
};

const playlist = (state = initialState, action) => {
  if (action.type === 'ADD_FACULTIES') {
    return {
      ...state,
      faculties: action.payload
    }
  }

  if (action.type === 'ADD_GROUP') {
    return {
      ...state,
    }
  }

  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="wrapper">
            <Navigation></Navigation>
            <Content></Content>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
