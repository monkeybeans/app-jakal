import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { voteForSuggestion } from '../../actions';
import { getSession } from '../../core/session';
import { PeriodEnum } from '../../models';
import './voting-list.scss';


class VotingList extends React.Component {
  constructor(props) {
    super(props);

    this.renderVoteItem = this.renderVoteItem.bind(this);
  }

  renderVoteButton(suggestionId) {
    const votedDate = new Date(getSession().vote_time);
    const currentDate = new Date();
    const quarantineMs = 1000 * 60 * 60 * 60 * 24 * 7;

    if (this.props.config.period !== PeriodEnum.VOTE) {
      return null;
    }

    let votingPossible = true;
    if (!isNaN(votedDate.getTime()) && (votedDate.getTime() + quarantineMs) > currentDate.getTime()) {
      votingPossible = false;
    }


    const onClick = e => voteForSuggestion(e.target.value);
    return (
      <Button
        disabled={!votingPossible}
        onClick={onClick}
        bsStyle={votingPossible ? 'success' : 'default'}
        bsSize="lg"
        value={suggestionId}
      >
        Vote
      </Button>
    );
  }

  renderVoteItem(suggestion) {
    const { config } = this.props;
    const numVotesElem = <span className="vote-item__num-votes">{suggestion.numVotes.value}</span>;
    return (
      <div className="vote-item" key={suggestion.id.value}>
        <h2>
          { suggestion.name.value }
          { config.period === PeriodEnum.DISPLAY ? numVotesElem : null }
        </h2>
        <p>{ suggestion.description.value }</p>
        { this.renderVoteButton(suggestion.id.value) }
      </div>
    );
  }

  render() {
    const { config } = this.props;
    return (
      <div className="vote-list">
        <h2>Current suggestions.</h2>
        <p>Current time <b>{config.period}</b> - days left <b>{config.daysToNextPeriod}</b></p>
        { this.props.dynamics.suggestions.map(this.renderVoteItem) }
      </div>
    );
  }
}

VotingList.propTypes = {
  config: React.PropTypes.object, //eslint-disable-line
  dynamics: React.PropTypes.object, //eslint-disable-line
};

const mapStateToProps = state => ({
  config: state.config,
  dynamics: state.dynamics,
});

export default connect(mapStateToProps)(VotingList);
