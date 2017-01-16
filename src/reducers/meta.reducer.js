import { actionEnum } from '../actions';
import { ConfigState, DynamicsState, HistoryState } from './states';

export function config(state = new ConfigState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_CONFIG: return new ConfigState(action.data);
    default: return state;
  }
}

export function dynamics(state = new DynamicsState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_DYNAMICS: return new DynamicsState(action.data);
    default: return state;
  }
}

export function history(state = new HistoryState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_HISTORY: return new HistoryState(action.data);
    default: return state;
  }
}
