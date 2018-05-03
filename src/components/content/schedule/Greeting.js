// React Components import
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Styles
import './Greeting.styl'

// Other components
import ScheduleList from './schedule-list/ScheduleList';

class Schedule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      preloader: false
    }

    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="schedule">

        <div className="greeting">
          {this.userData
            ? this.userData.type === 'group'
              ? <div>Привет, студент группы {this.userData.name}, твое расписание на неделю:</div>
              : <div>Добрый день, {this.userData.name}, ваше расписание на неделю:</div>
            : <div>Добро пожаловать, выбери свою группу в меню, и сохрани ее, что бы в следующий раз сразу увидеть расписание.</div>
          }
        </div>

        {this.userData && this.userData.id && 
          <ScheduleList
            requestId={this.userData.id}
            type={this.userData.type}
          />
        }
      </div>
    );
  }
}

export default Schedule;
