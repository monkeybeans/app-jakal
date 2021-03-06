import test from 'ava';
import nock from 'nock';
import sinon from 'sinon';
import {
  actionEnum,
  updateConfig,
  updateDynamics,
  updateHistory,
  submitSuggestion,
  voteForSuggestion,
} from '../../src/actions';
import fixtures from '../helpers/fixtures';
import { endpointMapping } from '../../src/actions/api';
import SuggestionModel from '../../src/models/SuggestionModel';

let sandbox;
const VOTE_ID = 3;

test.before(() => {
  nock('https://dev.null')
  .get(`/${endpointMapping.META_CONFIG}`)
  .reply(200, fixtures.config_display)
  .get(`/${endpointMapping.META_DYNAMICS}`)
  .reply(200, fixtures.dynamics)
  .get(`/${endpointMapping.META_HISTORY}`)
  .reply(200, fixtures.history)
  .get(`/${endpointMapping.META_VOTE}`)
  .reply(200, {})
  .post(`/${endpointMapping.SUGGESTIONS}`)
  .reply(200, fixtures.dynamics)
  .put(`/${endpointMapping.SUGGESTIONS}/${VOTE_ID}/vote`)
  .reply(200, fixtures.dynamics);
});

test.after(() => {
  nock.restore();
});

test.beforeEach((t) => {
  sandbox = sinon.sandbox.create();

  t.context.dispatch = sandbox.spy();
});

test.afterEach(() => {
  sandbox.restore();
});

test('fetches dynamics data and map to a model', async (t) => {
  const { dispatch } = t.context;

  await updateConfig(dispatch);

  t.deepEqual(dispatch.firstCall.args[0], {
    type: actionEnum.UPDATE_CONFIG,
    data: fixtures.config_display,
  });
});

test('fetches static data and map to a model', async (t) => {
  const { dispatch } = t.context;

  await updateDynamics(dispatch);

  t.deepEqual(dispatch.firstCall.args[0], {
    type: actionEnum.UPDATE_DYNAMICS,
    data: fixtures.dynamics,
  });
});

test('fetches historical data and map to a model', async (t) => {
  const { dispatch } = t.context;

  await updateHistory(dispatch);

  t.deepEqual(dispatch.firstCall.args[0], {
    type: actionEnum.UPDATE_HISTORY,
    data: fixtures.history,
  });
});

test('post suggestion', async (t) => {
  const { dispatch } = t.context;
  const suggestion = new SuggestionModel({
    name: 'apa',
    description: 'banan',
  });

  await submitSuggestion(dispatch, suggestion);

  t.deepEqual(dispatch.firstCall.args[0], {
    type: actionEnum.UPDATE_DYNAMICS,
    data: fixtures.dynamics,
  });
});

test('post voting', async (t) => {
  const { dispatch } = t.context;

  await voteForSuggestion(dispatch, VOTE_ID);

  t.deepEqual(dispatch.firstCall.args[0], {
    type: actionEnum.TOGGLE_VOTING_RIGHT,
    hasRight: false,
  });

  t.deepEqual(dispatch.secondCall.args[0], {
    type: actionEnum.VOTING_DONE,
    data: fixtures.dynamics,
  });
});
