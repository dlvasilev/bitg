import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    const signLabel = (this.props.authenticated) ? 'Sign Out' : 'Sign In';
    return (
      <button onClick={this.handleAuthButtonClick.bind(this)}>
        {signLabel}
      </button>
    )
  }

  handleAuthButtonClick() {
    this.props.authenticate(!this.props.authenticated);
  }

  authenticatedRoutes() {
    if(this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to="/resources">Resources</Link>
        </li>
      );
    }

    return;
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            React HOC
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          {this.authenticatedRoutes()}
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps, actions)(Header);
