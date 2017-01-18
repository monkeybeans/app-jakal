import actionEnum from './action.enum';
import { sendSuggestion, sendSuggestionVote } from './api';
import { dispatch } from '../store';

const dispatchAction = {
  submit: data => dispatch({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
  vote: data => dispatch({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
};

function submitSuggestion(suggestion) {
  sendSuggestion(suggestion)
  .then(data => dispatchAction.submit(data));
}

function voteForSuggestion(id) {
  sendSuggestionVote(id)
  .then(data => dispatchAction.vote(data));
}

export {
  submitSuggestion,
  voteForSuggestion,
};
