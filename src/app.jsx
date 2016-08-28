import React from 'react';
import Header from './components/header';
import SectionCurrent from './components/section-current';

import './style/reset.scss';

const App = () => (
  <div>
    <Header />
    <SectionCurrent />
    <div>App Initialised...</div>
  </div>
);

export default App;
