import { createStore, combineReducers } from 'redux';
import { config, dynamics, history } from './reducers/meta.reducer';

const devTools = () => window.devToolsExtension && window.devToolsExtension();
const combinedReducers = combineReducers({ config, dynamics, history });
const store = createStore(combinedReducers, devTools());
const dispatch = store.dispatch;

export default store;
export {
  dispatch,
};
