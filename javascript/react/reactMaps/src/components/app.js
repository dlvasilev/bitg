import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 42.6977,
      lng: 23.3219
    }
  }


  render() {
    return (
      <div style={{ height: '100%' }}>
        <h1>ReactMap</h1>
        <button onClick={() => this.setState({ lat: 43.4085, lng: 23.2257 })} className="btn btn-primary">Montana, Bulgaria</button>
        <button onClick={() => this.setState({ lat: 42.6977, lng:  23.3219 })} className="btn btn-primary">Sofia, Bulgaria</button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
