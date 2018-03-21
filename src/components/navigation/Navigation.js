// React Components import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// Styles
import './Navigation.styl';

// Icons
import Logo from '../../icons/logo.svg';

// Other components
import SearchField from './search-field/SearchField';
import FacultyList from './faculty-list/FacultyList';

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="menu">
        <Link to="/bienio-react/" className="logo">
          <img src={Logo} alt="Bienio"/>
        </Link>
        <SearchField/>
        <FacultyList/>
      </div>
    );
  }
}

export default Navigation;
