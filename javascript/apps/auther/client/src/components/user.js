import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class User extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>Your User {this.props.user[0]}</div>
    )
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(User);
