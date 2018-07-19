// React Components import
import React, { Component } from 'react';

// Other components
import ScheduleList from './schedule-list/ScheduleList';

class Teacher extends Component {
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
          requestId={this.props.match.params.teacherId}
          type="teacher"
        />
      </div>
    );
  }
}

export default Teacher;
