import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

const appWithStore = React.createElement(Provider, { store }, React.createElement(App));

ReactDOM.render(
  appWithStore,
  document.getElementById('app'),
);
