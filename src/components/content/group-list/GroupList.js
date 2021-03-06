// React Component import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './GroupList.styl'

class GroupList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      title: ''
    }
  }

  getGroups() {
    fetch(`https://bsu.bienio.ru/api/get_group?faculty_id=${this.props.match.params.facultyId}`)
    .then(results => results.json())
    .then(data => {
      this.setState({
        groups: data.groups,
        title: data.faculty_name
      });
    })
  }

  componentDidMount() {
    this.getGroups()
  }

  componentWillReceiveProps() {
    this.getGroups()
  }

  render() {
    return (
      <div className="group-list">
        <div className="schedule-list__title">{this.state.title}</div>

        <div className="group-list__items">

          {this.state.groups.map(item => (
            <Link to={`/bienio-react/schedule/${item.group_id}`} className="group-list__item" key={item.group_id}>{item.group_name}</Link>
          ))}

        </div>
      </div>
    );
  }
}

export default GroupList;
