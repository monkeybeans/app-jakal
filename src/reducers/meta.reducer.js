import actionEnum from '../actions/action.enum';
import { ConfigState, DynamicsState, HistoryState } from './states';
import { readCookieValue } from '../core/store-config';
import { PeriodEnum, SuggestionModel } from '../models';

function period(value) {
  switch (value && value.toLowerCase()) {
    case 'suggest': return PeriodEnum.SUGGEST;
    case 'vote': return PeriodEnum.VOTE;
    case 'display': return PeriodEnum.DISPLAY;
    default: return undefined;
  }
}


function config(state = new ConfigState(), action) {
  switch (action.type) {
    case actionEnum.UPDATE_CONFIG:
      return new ConfigState({
        votingAllowed: readCookieValue('voting_done') !== true,
        period: period(action.data.period),
        daysToNextPeriod: action.data.days_to_next_period,
        daysElapsedPeriod: action.data.elapsed_period_time,
      });

    case actionEnum.TOGGLE_VOTING_RIGHT:
      return new ConfigState({ votingAllowed: action.hasRight }, state);

    default:
      return state;
  }
}

function dynamics(state = new DynamicsState({ suggestions: [] }), action) {
  const mapSuggestions = data => data
    .map(d => new SuggestionModel({
      id: d.id,
      name: d.name,
      description: d.description,
      numVotes: d.num_votes,
      submitted: d.submitted,
      submitter: d.submitter,
    }));

  switch (action.type) {
    case actionEnum.UPDATE_DYNAMICS:
      return new DynamicsState({
        suggestions: mapSuggestions(action.data.suggestions),
      });

    default: return state;
  }
}

function history(state = new HistoryState({ winners: [] }), action) {
  const mapHistory = data => data
    .map(d => ({
      name: d.name,
      description: d.description,
      numVotes: d.num_votes,
    }));

  switch (action.type) {
    case actionEnum.UPDATE_HISTORY: return new HistoryState({
      winners: mapHistory(action.data.last_winners),
    });

    default: return state;
  }
}

export {
  config,
  dynamics,
  history,
};
