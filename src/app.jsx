import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from './components/header';
import AddSuggestion from './components/add-suggestion';
import VotingList from './components/voting-list';
import History from './components/history';

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
      <div>
        <Header />
        <div className="app-body">
          <Grid fluid>
            <Row>
              <Col xs={12} md={8}>
                <VotingList />
                <AddSuggestion />
              </Col>
              <Col xs={12} md={4}>
                <History />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(App);
