import React from 'react';
import { Grid } from 'react-bootstrap';
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
        <Grid>
          <Header />
          <SectionCurrent />
        </Grid>
      </Provider>
    );
  }
}

export default App;
