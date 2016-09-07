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

  renderVoteItem(suggestion) {
    return (
      <div className="vote-item" key={suggestion.id}>
        <h2>
          { suggestion.name } <span className="vote-item__num-votes">{suggestion.numVotes}</span>
        </h2>
        <p>{ suggestion.description }</p>
        <Button onClick={this.voteForThis} bsStyle="primary" value={suggestion.id}>Vote</Button>
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
  dispatch: React.PropTypes.func,
  suggestion: React.PropTypes.object,
};

const mapStateToProps = state => (
  {
    suggestion: state.suggestion,
  }
);

export default connect(mapStateToProps)(VotingList);
