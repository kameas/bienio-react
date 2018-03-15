// React Component import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// For parse search in location
import * as qs from 'query-string';

// Styles
import './Search.styl'

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      teachers: []
    }
  }

  getTeachers() {
    fetch(`http://bsu.bienio.ru/api/search.php?teach_query=${qs.parse(this.props.location.search).searchQuery}`)
    .then(results => results.json())
    .then(data => {
      if (data) {
        this.setState({teachers: data});
      }
    })
  }

  componentDidMount() {
    this.getTeachers()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getTeachers();
    }
  }

  render() {
    return (
      <div className="search-list">
        {this.state.teachers.map(item => (
          <Link to={`/teacher/${item.teach_id}`} className="search-list__item" key={item.teach_id}>{item.teach_name}</Link>
        ))}
      </div>
    );
  }
}

export default Search;
