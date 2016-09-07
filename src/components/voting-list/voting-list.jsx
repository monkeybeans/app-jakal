import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { fetchSuggestions, voteForSuggestion } from '../../actions';


class VotingList extends React.Component {
  constructor(props) {
    super(props);

    this.voteForThis = this.voteForThis.bind(this);
    this.renderVoteItem = this.renderVoteItem.bind(this);
  }

  componentWillMount() {
    fetchSuggestions();
  }

  voteForThis(event) {
    voteForSuggestion(event.target.value);
  }

  renderVoteButton(suggestionId) {
    if (this.props.status.period !== 'VOTE') return null;

    return (
      <Button onClick={this.voteForThis} bsStyle="primary" value={suggestionId}>Vote</Button>
    );
  }

  renderVoteItem(suggestion) {
    return (
      <div className="vote-item" key={suggestion.id}>
        <h2>
          { suggestion.name } <span className="vote-item__num-votes">{suggestion.numVotes}</span>
        </h2>
        <p>{ suggestion.description }</p>
        { this.renderVoteButton(suggestion.id) }
      </div>
    );
  }

  render() {
    return (
      <div className="vote-list">
        <h2>Current suggestions</h2>
        { this.props.suggestion.freshSuggestions.map(this.renderVoteItem) }
      </div>
    );
  }
}

VotingList.propTypes = {
  suggestion: React.PropTypes.object,
  status: React.PropTypes.object,
};

const mapStateToProps = state => ({
  suggestion: state.suggestion,
  status: state.status,
});

export default connect(mapStateToProps)(VotingList);
