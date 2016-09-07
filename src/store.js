import { createStore, combineReducers } from 'redux';
import { suggestion, status } from './reducers';

const devTools = () => window.devToolsExtension && window.devToolsExtension();
const combinedReducers = combineReducers({ suggestion, status });
const store = createStore(combinedReducers, devTools());
const dispatch = store.dispatch;

export default store;
export {
  dispatch,
};
