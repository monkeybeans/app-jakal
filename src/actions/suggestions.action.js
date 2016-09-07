import api from '../api';
import { Suggestion } from '../models/suggestion';
import { dispatch } from '../store';

function updateStateSuggestions(suggestions) {
  const action = {
    type: 'UPDATE_FRESH_SUGGESTIONS',
    suggestions,
  };

  dispatch(action);
}

function fetchSuggestions() {
  api
  .get('/api/suggestions/fresh')
  .then(resp => {
    updateStateSuggestions(resp.map(s => new Suggestion(s)));
  })
  .catch(e => console.log(`could not get fresh suggestions: ${e}`));
}

function addSuggestion(name, description) {
  api
  .post('/api/suggestions', { name, description })
  .then(fetchSuggestions)
  .catch(e => console.log(`could not add suggestion: ${e}`));
}

function voteForSuggestion(suggestionId) {
  api
  .put(`/api/suggestions/${suggestionId}/vote`)
  .then(fetchSuggestions)
  .catch(e => console.log(`could not vote for suggestion: ${e}`));
}

export {
  addSuggestion,
  voteForSuggestion,
  fetchSuggestions,
};
