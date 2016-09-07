import { Prospect } from '../models/suggestion';


const defaultState = {
  freshSuggestions: [],
  prospect: new Prospect('', '', false),
};


export default function suggestion(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_FRESH_SUGGESTIONS':
      return Object.assign({}, state, { freshSuggestions: action.suggestions });
    case 'UPDATE_SUGGESTION_PROSPECT':
      return Object.assign({}, state, { prospect: action.prospect });
    default:
      return state;
  }
}
