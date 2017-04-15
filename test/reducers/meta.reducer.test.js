import test from 'ava';
import { action as metaAction } from '../../src/actions/meta.actions';
import { action as suggestionAction } from '../../src/actions/suggestion.actions';
import { config, dynamics, history } from '../../src/reducers/meta.reducer';
import fixtures from '../helpers/fixtures';
import { ConfigState, DynamicsState, HistoryState } from '../../src/reducers/states';
import SuggestionModel from '../../src/models/SuggestionModel';

test('updated config state', (t) => {
  const state = config(undefined, metaAction.updateConfig(fixtures.config_display));

  t.deepEqual(state, new ConfigState({
    daysElapsedPeriod: 13,
    daysToNextPeriod: 7,
    period: 'DISPLAY',
    votingAllowed: true,
  }));
});

test('updated dynamics state', (t) => {
  const state = dynamics(undefined, metaAction.updateDynamics(fixtures.dynamics));
  const firstExpected = new SuggestionModel({
    id: 2,
    name: 'apan apansson',
    description: 'oho hohoh oh oh',
    numVotes: 12,
    submitted: null,
    submitter: null,
  });

  t.truthy(state instanceof DynamicsState);
  t.truthy(state.suggestions.length === 4);
  t.deepEqual(state.suggestions[0], firstExpected);
});

test('updated history state', (t) => {
  const state = history(undefined, metaAction.updateHistory(fixtures.history));
  const firstExpected = {
    name: 'Banana Inc.',
    description: 'More bananas for the people!',
    numVotes: 99,
  };

  t.truthy(state instanceof HistoryState);
  t.truthy(state.winners.length === 5);
  t.deepEqual(state.winners[0], firstExpected);
});


test('toggles voting right', (t) => {
  let state = config(undefined, suggestionAction.toggleVotingRight(false));
  t.truthy(state.votingAllowed === false);

  state = config(undefined, suggestionAction.toggleVotingRight(true));
  t.truthy(state.votingAllowed === true);
});

test.skip('vote for a suggestion', (t) => {
  const state = config(undefined, suggestionAction.voteAdded(false));

  t.deepEqual(state, new ConfigState({
    daysElapsedPeriod: 13,
    daysToNextPeriod: 7,
    period: 'DISPLAY',
    votingAllowed: true,
  }));
});

test('submit a suggestion', (t) => {
  const state = dynamics(undefined, suggestionAction.submit(fixtures.dynamics));

  const firstExpected = new SuggestionModel({
    id: 2,
    name: 'apan apansson',
    description: 'oho hohoh oh oh',
    numVotes: 12,
    submitted: null,
    submitter: null,
  });

  t.truthy(state instanceof DynamicsState);
  t.truthy(state.suggestions.length === 4);
  t.deepEqual(state.suggestions[0], firstExpected);
});
