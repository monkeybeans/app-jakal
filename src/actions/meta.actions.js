import actionEnum from './action.enum';
import { fetchConfig, fetchDynamics, fetchHistory } from './api';
// import { dispatch } from '../store';

const dispatch = () => {};
const dispatchAction = {
  updateConfig: data => dispatch({
    type: actionEnum.UPDATE_CONFIG,
    data,
  }),
  updateDynamics: data => dispatch({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
  updateHistory: data => dispatch({
    type: actionEnum.UPDATE_HISTORY,
    data,
  }),
};

function updateConfig() {
  fetchConfig()
  .then(data => dispatchAction.updateConfig(data));
}

function updateDynamics() {
  fetchDynamics()
  .then(data => dispatchAction.updateDynamics(data));
}

function updateHistory() {
  fetchHistory()
  .then(data => dispatchAction.updateConfig(data));
}

export {
  updateConfig,
  updateDynamics,
  updateHistory,
};
