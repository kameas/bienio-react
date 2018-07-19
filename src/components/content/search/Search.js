// React Component import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// For parse search in location
// import { parse } from 'query-string';

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
    const query = this.props.location.search.split('?searchQuery=')[1];

    fetch(`https://bsu.bienio.ru/api/search.php?teach_query=${query}`)
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
          <Link to={`/bienio-react/teacher/${item.teach_id}`} className="search-list__item" key={item.teach_id}>{item.teach_name}</Link>
        ))}
      </div>
    );
  }
}

export default Search;
