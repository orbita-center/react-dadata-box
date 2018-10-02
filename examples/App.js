import React, { Component } from 'react';
import ReactDadataBox from '../src';

import './index.css';

const token = 'ff2eea11bd30f0e52d7107978323e3dcc170d5f1';

class App extends Component {
  render() {
    return (
      <div>
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="address" />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="party" />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="bank" />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="email" />
        <ReactDadataBox className="data" token={token} placeholder="Начните ввод" type="fio" />
      </div>
    );
  }
}

export default App;
