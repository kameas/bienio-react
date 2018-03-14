// React Component import
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'

// Styles
import './SearchField.styl'

class SearchField extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: '',
      fireRedirect: false
    }
  }

  render() {
    const { fireRedirect, query } = this.state

    console.log('query:', query)

    return (
      <form className="search" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Поиск преподавателя" onChange={this.handleChange.bind(this)} value={this.state.query}/>
        <button type="submit"></button>
        {/* {fireRedirect && (
          <Redirect to={`/search?searchQuery=${query}`}/>
        )} */}
      </form>
    );
  }

  handleChange(e) {
    console.log(e.target.value)

    this.setState({
      query: e.target.value,
      fireRedirect: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.props)
    console.log(this)
    // this.props.history.push(`/search?searchQuery=${this.state.query}`)
    // this.setState({
    //   fireRedirect: true
    // });
  }
}

export default SearchField;
