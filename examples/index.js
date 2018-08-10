import React from 'react';
import ReactDOM from 'react-dom';

import ReactDadata from '../dist/index';

import './index.css';

const token = 'ff2eea11bd30f0e52d7107978323e3dcc170d5f1';

ReactDOM.render(
  <div>
    <ReactDadata className="data" token={token} placeholder="Начните ввод" type="address" />
    <ReactDadata className="data" token={token} placeholder="Начните ввод" type="company" />
    <ReactDadata className="data" token={token} placeholder="Начните ввод" type="bank" />
  </div>,
  document.getElementById('root')
);
