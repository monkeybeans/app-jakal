import api from './api-lib';
import endpointMapping from './endpoints';

function sendSuggestion(suggestion) {
  return api.post(endpointMapping.SUGGESTIONS, suggestion.mapForApi())
  .then(({ data }) => data)
  .catch((e) => { throw e; });
}

function sendSuggestionVote(id) {
  return api.put(`${endpointMapping.SUGGESTIONS}/${id}/vote`)
  .then(({ data }) => data)
  .catch((e) => { throw e; });
}


export {
  sendSuggestion,
  sendSuggestionVote,
};
