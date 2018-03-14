// React Components import
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// For parse search in location
import * as qs from 'query-string';

// Styles
import './Schedule.styl'

// Other components
import Day from './day/Day';

class Schedule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      days: [],
      groupName: '',
      groupId: this.props.match.params.groupId,
      week: qs.parse(this.props.location.search).week || 0
    }
  }

  getSchedule() {
    fetch(`http://bsu.bienio.ru/api/get_schedule?group_id=${this.state.groupId}&week_id=${this.state.week}`)
    .then(results => results.json())
    .then(data => {
      this.setState({
        days: data.days,
        groupName: data.group_name,
        week: qs.parse(this.props.location.search).week || 0
      });
    })
  }

  componentDidMount() {
    this.getSchedule()
  }

  componentWillReceiveProps() {
    this.getSchedule()
  }

  render() {
    return (
      <div className="schedule">
        {/* <div style={{ width: '100%', minWidth: '100%' }}>
          <Link to={`/schedule/${this.state.groupId}?week=${this.state.week - 1}`}>prev</Link>
          <Link to={`/schedule/${this.state.groupId}?week=${this.state.week + 1}`}>next</Link>
        </div> */}
        {this.state.days.map(item => (
          <div key={item.weekday} className="schedule__item">
            <Day
              lessons={item.lessons}
              title={item.weekday_name}
              date={item.weekday_date}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Schedule;
