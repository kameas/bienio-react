// React Component import
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './Content.styl';

// Other components
import GroupList from './group-list/GroupList';
import Schedule from './schedule/Schedule';
import Search from './search/Search';
import Teacher from './schedule/Teacher';
import Greeting from './schedule/Greeting';

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preloader: false
    }
  }


  render() {
    return (
      <div className="content">
        <Route path="/bienio-react/faculties/:facultyId" component={GroupList}/>

        <Route path="/bienio-react/schedule/:groupId" component={Schedule}/>
        <Route path="/bienio-react/teacher/:teacherId" component={Teacher}/>
        <Route exact path="/bienio-react" component={Greeting}/>

        <Route path="/bienio-react/search" component={Search}/>
      </div>
    );
  }
}

export default Content;
