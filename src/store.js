import { createStore } from 'redux';
import suggestionReducer from './reducers/suggestion.reducer';

const devTools = () => window.devToolsExtension && window.devToolsExtension();
const store = createStore(suggestionReducer, devTools());
const dispatch = store.dispatch;

export default store;
export {
  dispatch,
};
