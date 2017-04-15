import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

class History extends React.Component {
  static mapStateToProps = state => ({
    winners: state.history.winners,
  });

  static propTypes = {
    winners: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  renderWinners(winners) {
    return winners.map(w => (
      <div className="history__list-item" key={w.description}>
        <div>
          <h3>
            { w.name }
            <span>{ w.numVotes }</span>
          </h3>
        </div>
        <div>
          <p>{ w.description }</p>
        </div>
      </div>
    ));
  }

  render() {
    const { winners } = this.props;

    return (
      <div className="history">
        <h2>Statistics of previous votings</h2>
        <div className="history__list">
          { this.renderWinners(winners) }
        </div>
      </div>
    );
  }
}

const connectedHistory = connect(History.mapStateToProps)(History);
export {
  connectedHistory as default,
  History,
};
