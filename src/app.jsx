import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './components/header';
import SectionCurrent from './components/section-current';
import './style/reset.scss';
import { updateConfig, updateDynamics, updateHistory } from './actions';

class App extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    [
      updateConfig,
      updateDynamics,
      updateHistory,
    ].forEach(a => a(dispatch));
  }

  render() {
    return (
      <Grid>
        <Header />
        <SectionCurrent />
      </Grid>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(App);
