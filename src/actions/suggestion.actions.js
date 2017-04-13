import actionEnum from './action.enum';
import { sendSuggestion, sendSuggestionVote } from './api';
import { setCookieValue } from '../core/store-config';

const a = {
  submit: data => ({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
  voteAdded: data => ({
    type: actionEnum.VOTING_DONE,
    data,
  }),
  toggleVotingRight: hasRight => ({
    type: actionEnum.TOGGLE_VOTING_RIGHT,
    hasRight,
  }),
};

function submitSuggestion(dispatch, suggestion) {
  return sendSuggestion(suggestion)
  .then(data => dispatch(a.submit(data)));
}

function voteForSuggestion(dispatch, id) {
  dispatch(a.toggleVotingRight(false));

  return sendSuggestionVote(id)
  .then((data) => {
    setCookieValue('voting_done', true, 14);
    dispatch(a.voteAdded(data));
  })
  .catch((e) => {
    dispatch(a.toggleVotingRight(true));
    throw e;
  });
}

export {
  a as action,
  submitSuggestion,
  voteForSuggestion,
};
