import React from 'react';
import { Grid } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Header from './components/header';
import SectionCurrent from './components/section-current';
import './style/reset.scss';
import store from './store';
import { updateConfig, updateDynamics, updateHistory } from './actions';

class App extends React.Component {
  componentWillMount() {
    updateConfig();
    updateDynamics();
    updateHistory();
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
