import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import SectionCurrent from './components/section-current';
import './style/reset.scss';
import store from './store';


const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <SectionCurrent />
      <div>App Initialised...</div>
    </div>
  </Provider>
);

export default App;
