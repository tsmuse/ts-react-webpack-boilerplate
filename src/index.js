import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

import ReactHotReloadExample from './Components/ReactHotReloadExample/ReactHotReloadExample';

const App = () => {
  return (
    <React.Fragment>
      <h1> Boilerplate is running</h1>
      <p> React and all it's crazy dependencies seems to be working...</p>
      <ReactHotReloadExample />
    </React.Fragment>
  );
}

render(<App />, document.getElementById('app'));