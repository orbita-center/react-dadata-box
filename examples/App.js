import React, { Component } from 'react';
import ReactDadataBox from '../src';

import './index.css';

const token = 'ff2eea11bd30f0e52d7107978323e3dcc170d5f1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };

    this.queryChange = this.queryChange.bind(this);
  }

  queryChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.queryChange} />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Начните ввод"
          type="address"
          query={this.state.query}
        />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="company" />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="bank" />
      </div>
    );
  }
}

export default App;
