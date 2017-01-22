import actionEnum from '../actions/action.enum';
import { ConfigState, DynamicsState, HistoryState } from './states';
import { readCookieValue } from '../core/store-config';

export function config(state = new ConfigState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_CONFIG:
      Object.assign(action.data, { votingAllowed: readCookieValue('voting_done') !== true });

      return new ConfigState(action.data);
    case actionEnum.TOGGLE_VOTING_RIGHT:
      return new ConfigState({ votingAllowed: action.hasRight }, state);
    default:
      return state;
  }
}

export function dynamics(state = new DynamicsState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_DYNAMICS:
      return new DynamicsState(action.data);
    default: return state;
  }
}

export function history(state = new HistoryState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_HISTORY: return new HistoryState(action.data);
    default: return state;
  }
}
