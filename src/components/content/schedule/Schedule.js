// React Components import
import React, { Component } from 'react';

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
