import React from 'react';
import ReactDOM from 'react-dom';

import ReactDadata from './ReactDadata';

import './index.css';

ReactDOM.render(
  <div>
    <ReactDadata
      className="data"
      token="ff2eea11bd30f0e52d7107978323e3dcc170d5f1"
      placeholder="Начните ввод"
      type="address"
    />
    <ReactDadata
      className="data"
      token="ff2eea11bd30f0e52d7107978323e3dcc170d5f1"
      placeholder="Начните ввод"
      type="company"
    />
    <ReactDadata
      className="data"
      token="ff2eea11bd30f0e52d7107978323e3dcc170d5f1"
      placeholder="Начните ввод"
      type="bank"
    />
  </div>,
  document.getElementById('root')
);
