// React Components import
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// For parse search in location
// import * as qs from 'query-string';

// Styles
import './ScheduleList.styl'

// Other components
import Day from '../day/Day';

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      days: [],
      title: '',
      week: 0,
      type: 'group'
    }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    // this.week = qs.parse(this.props.location.search).searchQuery
  }
  
  getSchedule() {

    const url = `http://bsu.bienio.ru/api/${this.props.type === 'group' ? 'get_schedule' : 'get_teacher'}?${this.props.type === 'group' ? 'group_id' : 'teach_id'}=${this.props.requestId}&week_id=${this.state.week}`;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({
          days: data.days,
          title: data.group_name,
          week: 0
        });
      })
  }

  toggleUserData(event) {
    const status = event.target.checked

    if (status) {
      localStorage.setItem('userData', JSON.stringify({
        id: this.props.requestId,
        name: this.state.title,
        type: this.props.type
      }))
    } else {
      localStorage.removeItem('userData')
    }
  }
  
  componentDidMount() {
    this.getSchedule()
  }

  render() {

    return (
      <div className="schedule-list">
        <div className="schedule-list__title">{this.state.title}</div>
        
        <div className="schedule-list__options">
          <div className="schedule-list__save">
            <label className="schedule-save">
              <input type="checkbox" onChange={this.toggleUserData.bind(this)} defaultChecked={this.userData && this.userData.id === this.props.requestId}/>
              {this.props.type === 'group' ? 'Это моя группа' : 'Это я'}
            </label>
          </div>

          <div className="schedule-list__navigation">
            <div className="schedule-navigation">
              <div className="schedule-navigation__item">Prev</div>
              <div className="schedule-navigation__item">Next</div>
            </div>
          </div>
        </div>

        <div className="schedule-list__wrapper">
        
          {this.state.days.map(item => (
            <div key={item.weekday} className="schedule-list__item">
              <Day
                lessons={item.lessons}
                title={item.weekday_name}
                date={item.weekday_date}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ScheduleList;
