import React from 'react';
import { Button } from 'react-bootstrap';

import api from './../../api';

class VotingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };

    this.voteForThis = this.voteForThis.bind(this);
    this.renderVoteItem = this.renderVoteItem.bind(this);
  }

  componentWillMount() {
    api
    .get('/api/suggestions/fresh')
    .then(response => this.setState({ suggestions: response }))
    .catch(e => console.log(`could not get fresh suggestions: ${e}`));
  }

  voteForThis(event) {
    api
    .put(`/api/suggestions/${event.target.value}/vote`)
    .catch(e => console.log(`could not vote for suggestion: ${e}`));
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
        { this.state.suggestions.map(this.renderVoteItem) }
      </div>
    );
  }
}

export default VotingList;
