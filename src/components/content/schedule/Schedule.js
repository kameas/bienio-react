// React Components import
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// For parse search in location
// import * as qs from 'query-string';

// Other components
import ScheduleList from './schedule-list/ScheduleList';

class Schedule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      preloader: false
    }
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="schedule">
        <ScheduleList
          requestId={this.props.match.params.groupId}
          currentWeek={this.props.match.params.currentWeek}
          type="group"
        />
      </div>
    );
  }
}

export default Schedule;
