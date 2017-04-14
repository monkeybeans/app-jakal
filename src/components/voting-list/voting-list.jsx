import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Linkify from 'react-linkify';
import { voteForSuggestion } from '../../actions';
import { PeriodEnum } from '../../models';
import './voting-list.scss';


class VotingList extends React.Component {
  constructor(props) {
    super(props);

    this.renderVoteItem = this.renderVoteItem.bind(this);
  }

  renderVoteButton(suggestionId) {
    const { config } = this.props;
    if (config.period !== PeriodEnum.VOTE) { return null; }

    const onClick = e => voteForSuggestion(this.props.dispatch, e.target.value);
    return (
      <Button
        disabled={!config.votingAllowed}
        onClick={onClick}
        bsStyle={config.votingAllowed ? 'success' : 'default'}
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
        <p>
          <Linkify properties={{ target: '_blank' }}>
            { suggestion.description.value }
          </Linkify>
        </p>
        { this.renderVoteButton(suggestion.id.value) }
      </div>
    );
  }

  render() {
    const { config, dynamics } = this.props;
    return (
      <div className="vote-list">
        <h2>Current suggestions.</h2>
        <p>Current time <b>{config.period}</b> - days left <b>{config.daysToNextPeriod}</b></p>
        { dynamics.suggestions.map(this.renderVoteItem) }
      </div>
    );
  }
}

VotingList.propTypes = {
  config: React.PropTypes.object, //eslint-disable-line
  dynamics: React.PropTypes.object, //eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  config: state.config,
  dynamics: state.dynamics,
});

export default connect(mapStateToProps)(VotingList);
