import React, { Component } from 'react';
import Modal from './modal';
import Colors from './colors';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Hello</h1><h2>Hello</h2><h3>Hello</h3><h4>Hello</h4><h5>Hello</h5>
        </div>
        <div className="right">
          <h1>Hello</h1><h2>Hello</h2><h3>Hello</h3><h4>Hello</h4><h5>Hello</h5>
          <div>
            <Modal>
              <h1>You cant pick a color!</h1>
              <Colors />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
