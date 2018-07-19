// React Component import
import React, { Component } from 'react';

// Styles
import './Day.styl'

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    this.setState({
      lessons: this.props.lessons
    })
  }

  render() {
    return (
      <div className="day">
        <div className="day__header">
          <div className="day__title">{this.props.title}</div>
          <div className="day__date">{this.props.date}</div>
        </div>
        <div className="day__body">
          {this.state.lessons.map(item => (
            <div key={item.time_start} className="lesson">
              <div className="lesson__title">{item.subject}</div>
              <div className="lesson__type">{item.type}</div>
              <div className="lesson__cabinets">{item.thid}</div>

              <div className="lesson__authors">

              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Day;
