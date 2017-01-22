import api from './api-lib';

function fetchConfig() {
  return api.get('/meta/config')
  .then(resp => resp)
  .catch((e) => { throw e; });
}

function fetchDynamics() {
  return api.get('/meta/dynamics')
  .then(resp => resp)
  .catch((e) => { throw e; });
}

function fetchHistory() {
  return api.get('/meta/history')
  .then(resp => resp)
  .catch((e) => { throw e; });
}

export {
  fetchConfig,
  fetchDynamics,
  fetchHistory,
};
