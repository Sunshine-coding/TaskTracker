import React from 'react';
import ReactDOM from 'react-dom';
import Notes from '../app/components/Note';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Notes/>,
  document.getElementById('app')
);
