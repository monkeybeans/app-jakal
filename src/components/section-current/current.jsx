import React from 'react';
import AddSuggestion from '../add-suggestion';
import VotingList from '../voting-list';

let numSuggestionTouch = 0;
const suggestionUpdated = () => numSuggestionTouch++;

const Current = () => (
  <div>
    <VotingList />
    <AddSuggestion iHaveNews={suggestionUpdated} />
  </div>
);

export default Current;
