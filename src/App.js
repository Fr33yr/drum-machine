import React,{ Fragment } from 'react';
import './App.css';

import { Controls } from './components/controls'


function App() {
  return (
    <Fragment>
      <div id="drum-machine">

        <Controls/>
      </div>

      <footer><a href='https://github.com/Fr33yr/drum-machine' target={"_blank"} rel={"noopener noreferrer"}>Code</a></footer>
    </Fragment>
  );
}

export default App;
