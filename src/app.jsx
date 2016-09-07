import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import SectionCurrent from './components/section-current';
import './style/reset.scss';
import store from './store';
import { fetchPeriod } from './actions';

class App extends React.Component {
  componentWillMount() {
    fetchPeriod();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <SectionCurrent />
          <div>App Initialised...</div>
        </div>
      </Provider>
    );
  }
}

export default App;
