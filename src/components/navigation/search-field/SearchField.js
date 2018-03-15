// React Components import
import React, { Component } from 'react';
import history from '../../../history';

// Styles
import './SearchField.styl'

class SearchField extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Поиск преподавателя" onChange={this.handleChange.bind(this)} value={this.state.query}/>
        <button type="submit"></button>
      </form>
    );
  }

  handleChange(e) {

    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    history.push(`/search?searchQuery=${this.state.query}`);
  }
}

export default SearchField;
