const suggestionState = {
  suggestions: [],
};


export default function suggestionReducer(state = suggestionState, action) {
  switch (action.type) {
    case 'UPDATE_SUGGESTIONS':
      return Object.assign({}, { suggestions: action.suggestions });
    default:
      return state;
  }
}
