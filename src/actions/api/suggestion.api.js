import api from './api-lib';

function sendSuggestion(suggestion) {
  return api.post('/suggestions', suggestion.mapForApi())
  .then(resp => resp)
  .catch(e => console.error(e) || {}); // eslint-disable-line no-console
}

function sendSuggestionVote(id) {
  return api.put(`/suggestions/${id}/vote`)
  .then(resp => resp)
  .catch(e => console.error(e) || {}); // eslint-disable-line no-console
}


export {
  sendSuggestion,
  sendSuggestionVote,
};
