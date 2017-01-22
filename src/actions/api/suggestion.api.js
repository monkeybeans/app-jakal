import api from './api-lib';

function sendSuggestion(suggestion) {
  return api.post('/suggestions', suggestion.mapForApi())
  .then(resp => resp)
  .catch((e) => { throw e; });
}

function sendSuggestionVote(id) {
  return api.put(`/suggestions/${id}/vote`)
  .then(resp => resp)
  .catch((e) => { throw e; });
}


export {
  sendSuggestion,
  sendSuggestionVote,
};
