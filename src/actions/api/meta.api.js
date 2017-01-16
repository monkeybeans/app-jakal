import api from './api-lib';

function fetchConfig() {
  return api.get('/meta/config')
  .then(resp => resp)
  .catch(e => console.error(e) || {}); // eslint-disable-line no-console
}

function fetchDynamics() {
  return api.get('/meta/dynamics')
  .then(resp => resp)
  .catch(e => console.error(e) || {}); // eslint-disable-line no-console
}

function fetchHistory() {
  return api.get('/meta/history')
  .then(resp => resp)
  .catch(e => console.error(e) || {}); // eslint-disable-line no-console
}

export {
  fetchConfig,
  fetchDynamics,
  fetchHistory,
};
