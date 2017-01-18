import actionEnum from './action.enum';
import { fetchConfig, fetchDynamics, fetchHistory } from './api';

const a = {
  updateConfig: data => ({
    type: actionEnum.UPDATE_CONFIG,
    data,
  }),
  updateDynamics: data => ({
    type: actionEnum.UPDATE_DYNAMICS,
    data,
  }),
  updateHistory: data => ({
    type: actionEnum.UPDATE_HISTORY,
    data,
  }),
};

function updateConfig(dispatch) {
  fetchConfig()
  .then(data => dispatch(a.updateConfig(data)));
}

function updateDynamics(dispatch) {
  fetchDynamics()
  .then(data => dispatch(a.updateDynamics(data)));
}

function updateHistory(dispatch) {
  fetchHistory()
  .then(data => dispatch(a.updateConfig(data)));
}

export {
  updateConfig,
  updateDynamics,
  updateHistory,
};
