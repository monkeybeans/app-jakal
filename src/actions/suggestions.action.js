import api from '../api';
import { Suggestion, Prospect } from '../models/suggestion';
import { dispatch } from '../store';
import { updateSessionCookie } from '../core/session';

const updateStateSuggestions = suggestions => {
  const action = {
    type: 'UPDATE_FRESH_SUGGESTIONS',
    suggestions,
  };

  dispatch(action);
};

const updateProspect = (name, description, touch) => {
  const action = {
    type: 'UPDATE_SUGGESTION_PROSPECT',
    prospect: new Prospect(name, description, touch),
  };

  dispatch(action);
};

function fetchSuggestions() {
  api
  .get('/api/suggestions/fresh')
  .then(resp => {
    updateStateSuggestions(resp.map(s => new Suggestion(s)));
  })
  .catch(e => console.log(`could not get fresh suggestions: ${e}`));
}

function addSuggestion(prospect) {
  api
  .post('/api/suggestions', { name: prospect.name.val, description: prospect.description.val })
  .then(() => updateProspect('', '', false))
  .then(fetchSuggestions)
  .catch(e => console.log(`could not add suggestion: ${e}`));
}

function updateVoteTime() {
  updateSessionCookie({
    vote_time: new Date(),
  });
}

function voteForSuggestion(suggestionId) {
  api
  .put(`/api/suggestions/${suggestionId}/vote`)
  .then(updateVoteTime)
  .then(fetchSuggestions)
  .catch(e => console.log(`could not vote for suggestion: ${e}`));
}

export {
  addSuggestion,
  voteForSuggestion,
  fetchSuggestions,
  updateProspect,
};
