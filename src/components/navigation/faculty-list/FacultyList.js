// React Components import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    this.getFaculties();
  }

  getFaculties() {
    fetch('https://bsu.bienio.ru/api/get_faculties')
    .then(results => results.json())
    .then(data => {
      this.props.onAddFaculties(data.faculties)
    })
  }

  render() {
    console.log(this.props.faculties);
    return (
      <div className="faculty-list">
        {this.props.faculties.map(item => (
          <Link to={`/bienio-react/faculties/${item.faculty_id}`} className="faculty-list__item" key={item.faculty_id}>{item.faculty_name}</Link>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    faculties: state.faculties
  }),
  dispatch => ({
    onAddFaculties: (faculties) => {
      dispatch({
        type: 'ADD_FACULTIES',
        payload: faculties
      })
    }
  })
)(FacultyList);