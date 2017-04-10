import api from './api-lib';
import endpointMapping from './endpoints';

function fetchConfig() {
  return api.get(endpointMapping.META_CONFIG)
  .then(({ data }) => data)
  .catch((e) => { throw e; });
}

function fetchDynamics() {
  return api.get(endpointMapping.META_DYNAMICS)
  .then(({ data }) => data)
  .catch((e) => { throw e; });
}

function fetchHistory() {
  return api.get(endpointMapping.META_HISTORY)
  .then(({ data }) => data)
  .catch((e) => { throw e; });
}

export {
  fetchConfig,
  fetchDynamics,
  fetchHistory,
};
