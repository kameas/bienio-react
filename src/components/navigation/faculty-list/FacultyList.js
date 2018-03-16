// React Components import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './FacultyList.styl'

class FacultyList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      faculties: []
    }
  }

  componentDidMount() {
    fetch('https://bsu.bienio.ru/api/get_faculties')
    .then(results => results.json())
    .then(data => {
      this.setState({faculties: data.faculties});
    })
  }

  render() {
    return (
      <div className="faculty-list">
        {this.state.faculties.map(item => (
          <Link to={`/bienio-react/faculties/${item.faculty_id}`} className="faculty-list__item" key={item.faculty_id}>{item.faculty_name}</Link>
        ))}
      </div>
    );
  }
}

export default FacultyList;
