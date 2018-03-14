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

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Route path="/faculties/:facultyId" component={GroupList}/>
        <Route path="/schedule/:groupId" component={Schedule}/>
        <Route path="/search" component={Search}/>
        <Route path="/teacher/:teacherId" component={Teacher}/>
        {/* search.php?teach_query={запрос */}
      </div>
    );
  }
}

export default Content;
