const defaultState = {
  freshSuggestions: [],
  prospect: {},
};


export default function suggestion(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_FRESH_SUGGESTIONS':
      return Object.assign({}, state, { freshSuggestions: action.suggestions });
    case 'UPDATE_SUGGESTION_PROSPECT':
      return Object.assign({}, state, { prospect: action.suggestion });
    default:
      return state;
  }
}
