import actionEnum from './action.enum';
import { sendSuggestion, sendSuggestionVote } from './api';

const a = {
  submit: data => ({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
  vote: data => ({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
};

function submitSuggestion(dispatch, suggestion) {
  sendSuggestion(suggestion)
  .then(data => dispatch(a.submit(data)));
}

function voteForSuggestion(dispatch, id) {
  sendSuggestionVote(id)
  .then(data => dispatch(a.vote(data)));
}

export {
  submitSuggestion,
  voteForSuggestion,
};
