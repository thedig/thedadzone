console.log('My Minimal React Webpack Babel Setup');
let abc = "def";
console.log('abc:', abc);

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();