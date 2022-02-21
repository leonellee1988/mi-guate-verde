import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { AppTwo } from './App.js';
//import { AppThree } from './App.js';
import { AppFour } from './App.js';
import { AppFive } from './App.js';
import { AppSix } from './App.js';
import { AppSeven } from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <AppTwo />
  </React.StrictMode>,
  document.getElementById('rootTwo')
);

/*ReactDOM.render(
  <React.StrictMode>
    <AppThree />
  </React.StrictMode>,
  document.getElementById('rootThree')
);*/

ReactDOM.render(
  <React.StrictMode>
    <AppFour />
  </React.StrictMode>,
  document.getElementById('rootFour')
);

ReactDOM.render(
  <React.StrictMode>
    <AppFive />
  </React.StrictMode>,
  document.getElementById('rootFive')
);

ReactDOM.render(
  <React.StrictMode>
    <AppSix />
  </React.StrictMode>,
  document.getElementById('rootSix')
);

ReactDOM.render(
  <React.StrictMode>
    <AppSeven />
  </React.StrictMode>,
  document.getElementById('rootSeven')
);