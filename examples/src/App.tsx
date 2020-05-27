import * as React from 'react';
import { useState } from 'react';
import ReactDadataBox from 'react-dadata-box';
import ReactJsonView from 'react-json-view';
import './styles.css';

//TEST (registered to ruvata)
const testToken = 'bccf01d44b841d082101c119c72601851e259396';
// ToDo: if it not work (limit of 10 000 api call per day - is exceeded)
// register your personal account at https://dadata.ru/api/ and get your personal token

const idleAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
};

export default function App() {
  const [sample1, setSample1] = useState({});
  const [sample2, setSample2] = useState({});
  const [sample3, setSample3] = useState({});
  const [sample4, setSample4] = useState({});

  return (
    <div className="App">
      <h1>react-dadata-box</h1>
      <hr />
      <h3>defaults</h3>
      <ReactDadataBox token={testToken} onChange={suggestion => setSample1(suggestion)} />
      <br />
      <ReactJsonView src={sample1} />
      <br />
      <hr />

      <h3>custom action (#1) as function</h3>
      <ReactDadataBox
        token={testToken}
        onChange={suggestion => setSample2(suggestion)}
        customActions={suggestions =>
          !suggestions.length && (
            <a href=" " onClick={idleAction}>
              произвольное действие
            </a>
          )
        }
      />
      <br />
      <ReactJsonView src={sample2} />
      <br />
      <hr />

      <h3>custom action (#2) as function returns multiple</h3>
      <ReactDadataBox
        token={testToken}
        onChange={suggestion => setSample2(suggestion)}
        customActions={() => ['действие1', 'действие1'].map(action => <div key={action}>{action}</div>)}
      />
      <br />
      <ReactJsonView src={sample2} />
      <br />
      <hr />

      <h3>custom action (#3) as node</h3>
      <ReactDadataBox
        token={testToken}
        onChange={suggestion => setSample3(suggestion)}
        forceOpenList={true}
        customActions={() => <div>произвольное действие</div>}
      />
      <br />
      <ReactJsonView src={sample3} />
      <br />
      <hr />

      <h3>custom styling (dark theme)</h3>
      <ReactDadataBox
        token={testToken}
        onChange={suggestion => setSample4(suggestion)}
        className="dark-input"
        customStyles={{
          'react-dadata__suggestions': 'dark-theme',
          'react-dadata__suggestion': {
            border: '1px solid blue',
            borderBottom: 'none'
          }
        }}
      />
      <br />
      <ReactJsonView src={sample4} />
      <br />
      <hr />
    </div>
  );
}
