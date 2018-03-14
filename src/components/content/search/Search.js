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
    console.log('query on teacher:', qs.parse(this.props.location.search).searchQuery)
    console.log('query on teacher:', this.props)
    
    fetch(`http://bsu.bienio.ru/api/search.php?teach_query=${qs.parse(this.props.location.search).searchQuery}`)
    .then(results => results.json())
    .then(data => {
      if (data) {
        this.setState({teachers: data});
      }
    })
  }

  componentDidMount() {
    console.log(this.props.match.params)
    console.log(qs.parse(this.props.location.search))
    
    this.getTeachers()
  }

  componentWillReceiveProps() {
    this.getTeachers()
  }

  render() {
    console.log(this.state.teachers)
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
