import _ from 'lodash';
import React, { Component } from 'react';
import Faker from 'faker';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };
  }

  handleAddClick() {
    const quote = Faker.lorem.sentence();
    this.setState({ quotes: [...this.state.quotes, quote] });
  }

  handleRemoveClick(quote) {
    this.setState({ quotes: _.without(this.state.quotes, quote) });
  }

  renderQuotes() {
    return this.state.quotes.map((item, index) => {
      return (
        <li className="list-group-item" key={item}>
          {item}
          <button
            onClick={this.handleRemoveClick.bind(this, item)}
            className="btn btn-danger">Delete</button>
        </li>
      )
    });
  }

  render() {
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    return (
      <div>
        <button onClick={this.handleAddClick.bind(this)}>Add</button>
        <ul className="list-group">
          <CSSTransitionGroup {...transitionOptions}>
          {this.renderQuotes()}
          </CSSTransitionGroup>
        </ul>
      </div>
    );
  }
}
