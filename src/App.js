import React,{ Fragment } from 'react';
import './App.css';

import { Controls } from './components/controls'


function App() {
  return (
    <Fragment>
      <div id="drum-machine">

        <Controls/>
      </div>
    </Fragment>
  );
}

export default App;
